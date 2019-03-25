package controllers

import (
	"encoding/json"
	"fmt"
	"gopub/command"
	"gopub/models"
	"log"
	"path"

	"strconv"
	"strings"

	"github.com/kataras/iris"
)

// 版本管理页面
func (c *DefauleController) VersionCtl(ctx iris.Context) {
	id, err := ctx.URLParamInt("id")
	if err != nil {
		ctx.WriteString(fmt.Sprintf("$s", err))
		return
	}
	ctx.ViewData("id", id)
	ctx.View("version/index.html")
}

// 版本详情
func (c *DefauleController) VersionInfo(ctx iris.Context) {
	commit := ctx.URLParam("commit")
	projectId := ctx.URLParam("project")

	commit = commit[:7]

	t1 := new(models.Project)
	project, err := t1.Find(projectId)
	if err != nil {
		ctx.WriteString(fmt.Sprintf("%s", err))
		return
	}

	command := new(command.Command)
	output, err := command.LocalCommandOutput("cd " + project.DeployFrom + " && " + "git log -1 " + commit + " --name-only")
	if err != nil {
		log.Println(err)
		return
	}
	// tag1 := strings.Index(string(output), "\n\n")
	// tag2 := strings.LastIndex(string(output), "\n\n")
	// var result [3]string
	// result[0] = strings.TrimSpace(string(output[:tag1]))
	// result[1] = strings.TrimSpace(string(output[tag1:tag2]))
	// result[2] = strings.TrimSpace(string(output[tag2:]))

	result := strings.Split(strings.TrimSpace(string(output)), "\n\n")
	ctx.JSON(result)
}

// 根据项目id获取版本列表
func (c *DefauleController) VersionList(ctx iris.Context) {
	id := ctx.URLParam("id")

	t1 := new(models.Project)
	project, err := t1.Find(id)
	if err != nil {
		ctx.WriteString(fmt.Sprintf("%s", err))
		return
	}

	command := new(command.Command)

	_, err = command.LocalCommandOutput("cd " + project.DeployFrom + " && " + "git pull")
	if err != nil {
		log.Println(err)
		return
	}

	logList, err := command.LocalCommandOutput("cd " + project.DeployFrom + " && " + "git log -20 --pretty=\"%h - %an - %s - %cD\"")
	if err != nil {
		log.Println(err)
		return
	}

	logListtArr := strings.Split((strings.TrimSpace(string(logList))), "\n")

	data, _ := json.Marshal(logListtArr)
	ctx.Write(data)
}

// 线上版本列表
func (c *DefauleController) VersionIndex(ctx iris.Context) {
	projectId, err := ctx.URLParamInt("id")
	if err != nil {
		ctx.WriteString(fmt.Sprintf("%s", err))
		return
	}
	p := models.Project{Id: projectId}
	project, err := p.Find(p.Id)
	if err != nil {
		ctx.WriteString(fmt.Sprintf("%s", err))
		return
	}

	var versionSlice = make(map[string][]models.Version, 0)

	hosts := strings.Split(strings.TrimSpace(project.Hosts), ",")
	for _, v := range hosts {
		remoteEnv := new(command.Command)
		project.Hosts = v
		port := strings.Split(project.Hosts, ":")
		remoteEnv.Host = port[0]
		remoteEnv.Port, _ = strconv.Atoi(port[1])
		remoteEnv.User = project.ReleaseUser

		var cmd string
		var output string
		cmd = "ls " + project.ReleaseLibrary + path.Base(project.DeployFrom)
		output, err = remoteEnv.RemoteCommandOutput(cmd)
		if err != nil {
			ctx.WriteString(fmt.Sprintf("%s", err))
			return
		}

		versions := strings.Split(strings.TrimSpace(output), "\n")

		versionsModel := models.Version{}
		versionSlice[remoteEnv.Host+":"+port[1]] = versionsModel.VersionList(versions)

		cmd = "ls " + project.ReleaseTo + path.Base(project.DeployFrom) + " -al"
		output, err = remoteEnv.RemoteCommandOutput(cmd)
		if err != nil {
			ctx.WriteString(fmt.Sprintf("%s", err))
			return
		}
		for k, v := range versionSlice[remoteEnv.Host+":"+port[1]] {
			if strings.Contains(output, v.Id) {
				versionSlice[remoteEnv.Host+":"+port[1]][k].Active = 1
			}
		}
	}

	log.Println(versionSlice)
	ctx.ViewData("id", projectId)
	ctx.ViewData("version", versionSlice)
	ctx.View("version/index.html")

}

// 版本切换
func (c *DefauleController) VersionSwitch(ctx iris.Context) {
	// 版本号
	version := ctx.URLParam("version")
	// 项目id
	projectID, err := ctx.URLParamInt("project")
	if err != nil {
		ctx.WriteString(fmt.Sprintf("%s", err))
		return
	}
	p := models.Project{}
	project, err := p.Find(projectID)
	if err != nil {
		ctx.WriteString(fmt.Sprintf("%s", err))
		return
	}

	hosts := strings.Split(strings.TrimSpace(project.Hosts), ",")
	for _, v := range hosts {
		remoteEnv := new(command.Command)
		project.Hosts = v
		port := strings.Split(project.Hosts, ":")
		remoteEnv.Host = port[0]
		remoteEnv.Port, _ = strconv.Atoi(port[1])
		remoteEnv.User = project.ReleaseUser

		// 切换
		cmd := "ln -sfn " + project.ReleaseLibrary + path.Base(project.DeployFrom) + "/" + version + " " + project.ReleaseTo + path.Base(project.DeployFrom)
		_, err = remoteEnv.RemoteCommandOutput(cmd)
		if err != nil {
			ctx.WriteString(fmt.Sprintf("%s", err))
			return
		}

		// 部署后命令
		if project.PostRelease != "" {
			cmds := strings.Split(strings.TrimSpace(project.PostRelease), "\r\n")
			for _, cmd := range cmds {
				err := remoteEnv.RemoteCommand(cmd)
				if err != nil {
					ctx.WriteString(fmt.Sprintf("%s", err))
					return
				}
			}
		}

	}

	ctx.Redirect("/version/index?id=" + strconv.Itoa(projectID))
}

// 版本删除
func (c *DefauleController) VersionDestory(ctx iris.Context) {

}
