(function(t){function e(e){for(var n,s,l=e[0],i=e[1],c=e[2],p=0,m=[];p<l.length;p++)s=l[p],a[s]&&m.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,l=1;l<o.length;l++){var i=o[l];0!==a[i]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},a={app:0},r=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("64a9"),a=o.n(n);a.a},"0c41":function(t,e,o){},"10cd":function(t,e,o){"use strict";var n=o("2cd3"),a=o.n(n);a.a},"2cd3":function(t,e,o){},"2dd4":function(t,e,o){"use strict";var n=o("9766"),a=o.n(n);a.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"body"},[o("Row",[o("Menu",{attrs:{mode:"horizontal","active-name":"",width:"auto"}},[o("MenuItem",{attrs:{name:"1",to:"/"}},[o("Icon",{attrs:{type:"md-desktop"}}),t._v("\n              首页\n          ")],1),o("Submenu",{attrs:{name:"2"}},[o("template",{slot:"title"},[o("Icon",{attrs:{type:"ios-list"}}),t._v("\n                  上线单\n              ")],1),o("MenuGroup",{attrs:{title:"上线单"}},[o("MenuItem",{attrs:{name:"2-0",to:"/newtask"}},[t._v("新建上线单")]),o("MenuItem",{attrs:{name:"2-1",to:"/task"}},[t._v("我的上线单")]),o("MenuItem",{attrs:{name:"2-2",to:"/taskaudit"}},[t._v("上线单管理")])],1)],2),o("Submenu",{attrs:{name:"3"}},[o("template",{slot:"title"},[o("Icon",{attrs:{type:"ios-list"}}),t._v("\n                  项目\n              ")],1),o("MenuGroup",{attrs:{title:"项目"}},[o("MenuItem",{attrs:{name:"3-0",to:"/project"}},[t._v("项目列表")]),o("MenuItem",{attrs:{name:"3-1",to:"/project/new"}},[t._v("新建项目")])],1)],2),o("MenuItem",{attrs:{name:"4",to:"/about"}},[o("Icon",{attrs:{type:"ios-paper-outline"}}),t._v("\n              文件检查\n          ")],1),o("MenuItem",{attrs:{name:"5",to:"/about"}},[o("Icon",{attrs:{type:"ios-people-outline"}}),t._v("\n              人员管理\n          ")],1),o("MenuItem",{attrs:{name:"6",to:"/login"}},[o("Icon",{attrs:{type:"ios-people-outline"}}),t._v("\n              人员管理\n          ")],1)],1)],1),o("router-view"),"task"==this.$route.name?void 0:t._e()],2)},r=[],s={name:"root",components:{}},l=s,i=(o("034f"),o("2877")),c=Object(i["a"])(l,a,r,!1,null,null,null),u=c.exports,p=o("8c4f"),m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("gopub2.0版本即将上线，敬请期待")])])}],f={},y=Object(i["a"])(f,m,d,!1,null,null,null),h=y.exports,g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v("sdfsf")])},v=[],I={},b=Object(i["a"])(I,g,v,!1,null,null,null),w=b.exports,x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Row",{staticStyle:{"margin-bottom":"60px"}},[o("Col",{attrs:{span:"22",offset:"1"}},[o("Card",[o("Row",[o("Col",{attrs:{span:"4"}},[o("Select",{model:{value:t.model1,callback:function(e){t.model1=e},expression:"model1"}},t._l(t.cityList,function(e){return o("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}),1)],1),o("Col",{attrs:{span:"17"}},[o("Input",{staticStyle:{padding:"0 5px"},attrs:{placeholder:"Enter something..."}})],1),o("Col",{attrs:{span:"3"}},[o("Button",{attrs:{type:"primary"}},[t._v("搜索")])],1)],1)],1),o("Card",[o("Tag",{attrs:{checkable:"",color:"blue"}},[t._v("上传进度："+t._s(t.msg))]),o("Progress",{attrs:{percent:t.percent,"stroke-width":5}}),o("Table",{attrs:{border:"",columns:t.columns7,data:t.data6}}),o("ButtonGroup",{staticStyle:{"margin-top":"5px"}},[o("Button",{attrs:{type:"primary"},on:{click:function(e){return t.pageUp()}}},[o("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("\n                    上一页\n                ")],1),o("Button",{attrs:{type:"primary"},on:{click:function(e){return t.pageDown()}}},[t._v("\n                    下一页\n                    "),o("Icon",{attrs:{type:"ios-arrow-forward"}})],1)],1)],1)],1),o("Collapse",{staticStyle:{position:"fixed",bottom:"0",width:"100%","z-index":"999"},model:{value:t.Collapse,callback:function(e){t.Collapse=e},expression:"Collapse"}},[o("Panel",{attrs:{name:"Collapse"}},[t._v("\n            发布细节\n            "),o("p",{attrs:{slot:"content"},slot:"content"},[o("Input",{attrs:{type:"textarea",readonly:"",autosize:{minRows:11,maxRows:11},placeholder:"Enter something..."},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1)])],1)],1)},k=[],j=(o("28a5"),o("c5f6"),{name:"task",components:{},mounted:function(){this.getDate(),this.webSocket()},methods:{filesWindow:function(t){var e=this;this.$Modal.confirm({width:"60%",render:function(o){return o("Input",{props:{value:t,autofocus:!0,type:"textarea",autosize:!0,readonly:!0},on:{input:function(t){e.value=t}}})}})},pubProgress:function(t){this.$Notice.open({title:"部署单号："+t[1],duration:3,render:function(e){return e("div",[e("p",t[3]),e("Progress",{style:{"margin-top":"5px"},props:{percent:Number(t[2]),"stroke-width":3}})])}})},webSocket:function(){var t=this;this.ws.onmessage=function(e){var o=e.data;if(0==o.indexOf("progress")){var n=o.split(":");t.pubProgress(n)}else if(0==o.indexOf("upload")){var a=o.split(":");t.msg=a[1],t.percent=a[3]/a[4]*100}else t.textarea+=o+"\n"}},deploy:function(t){var e=this;this.jQuery.ajax({type:"get",url:location.origin+"/task/deploy",data:{id:e.data6[t].Id},dataType:"json",withCredentials:!0,success:function(t){console.log(t)}})},remove:function(t){var e=this;this.jQuery.ajax({type:"get",url:location.origin+"/task/del",data:{id:e.data6[t].Id},dataType:"json",withCredentials:!0,success:function(o){e.data6.splice(t,1)}})},getDate:function(){var t=location.origin+"/task/index",e=this;this.jQuery.ajax({type:"post",url:t,data:{},dataType:"json",withCredentials:!0,success:function(t){t.Expired<=0?e.$router.push({name:"login",params:{orderNum:"sfsd"}}):e.data6=t}})},pageUp:function(){if(!(this.page<1)){1!=this.page&&this.page--;var t=this;this.jQuery.ajax({type:"get",url:location.origin+"/task/index",data:{page:t.page},dataType:"json",withCredentials:!0,success:function(e){t.data6=e}})}},pageDown:function(){var t=this;t.page++,this.jQuery.ajax({type:"get",url:location.origin+"/task/index",data:{page:t.page},dataType:"json",withCredentials:!0,success:function(e){t.data6=e}})}},watch:{},data:function(){var t=this;return{msg:"",percent:0,progres_data:[],progres:[],page:1,Collapse:"Collapse1",textarea:"",columns7:[{title:"#",key:"Id",width:100},{title:"项目",key:"Project"},{title:"上线标题",key:"Title"},{title:"文件列表",key:"Files",render:function(e,o){return e("Input",{props:{rows:1,type:"text",value:o.row.Files,icon:"ios-albums-outline",readonly:!0},on:{"on-click":function(){t.filesWindow(o.row.Files)}}})}},{title:"版本",key:"Version"},{title:"发布进度",key:"Status",render:function(t,e){return 3==e.row.Status?t("Tag",{props:{color:"blue"}},"完成"):t("Tag",{props:{color:"green"}},"没完成")}},{title:"Action",key:"action",width:150,align:"center",render:function(e,o){return 1!=o.row.Audit?e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{}},"未审批")]):e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){confirm("确定提交？")&&(t.Collapse="Collapse",t.deploy(o.index))}}},"发布"),e("Button",{props:{type:"primary",size:"small"},on:{click:function(){t.remove(o.index)}}},"删除")])}}],data6:[{Id:1,Project:"John Brown",Title:18,Files:"1sfsf",Version:18,Status:23,Progress:32}],cityList:[{value:"New York",label:"New York"},{value:"London",label:"London"},{value:"Sydney",label:"Sydney"},{value:"Ottawa",label:"Ottawa"},{value:"Paris",label:"Paris"},{value:"Canberra",label:"Canberra"}],model1:""}}}),C=j,_=(o("b39f"),Object(i["a"])(C,x,k,!1,null,null,null)),T=_.exports,R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Row",{staticStyle:{"margin-bottom":"60px"}},[o("Col",{attrs:{span:"22",offset:"1"}},[o("Card",[o("Row",[o("Col",{attrs:{span:"4"}},[o("Select",{model:{value:t.model1,callback:function(e){t.model1=e},expression:"model1"}},t._l(t.cityList,function(e){return o("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}),1)],1),o("Col",{attrs:{span:"17"}},[o("Input",{staticStyle:{padding:"0 5px"},attrs:{placeholder:"Enter something..."}})],1),o("Col",{attrs:{span:"3"}},[o("Button",{attrs:{type:"primary"}},[t._v("搜索")])],1)],1)],1),o("Card",[o("Tag",{attrs:{checkable:"",color:"blue"}},[t._v("上传进度："+t._s(t.msg))]),o("Progress",{attrs:{percent:t.percent,"stroke-width":5}}),o("Table",{attrs:{border:"",columns:t.columns7,data:t.data6}}),o("ButtonGroup",{staticStyle:{"margin-top":"5px"}},[o("Button",{attrs:{type:"primary"},on:{click:function(e){return t.pageUp()}}},[o("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("\n                    上一页\n                ")],1),o("Button",{attrs:{type:"primary"},on:{click:function(e){return t.pageDown()}}},[t._v("\n                    下一页\n                    "),o("Icon",{attrs:{type:"ios-arrow-forward"}})],1)],1)],1)],1),o("Collapse",{staticStyle:{position:"fixed",bottom:"0",width:"100%","z-index":"999"},model:{value:t.Collapse,callback:function(e){t.Collapse=e},expression:"Collapse"}},[o("Panel",{attrs:{name:"Collapse"}},[t._v("\n            发布细节\n            "),o("p",{attrs:{slot:"content"},slot:"content"},[o("Input",{attrs:{type:"textarea",readonly:"",autosize:{minRows:11,maxRows:11},placeholder:"Enter something..."},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1)])],1)],1)},F=[],$={name:"task",components:{},mounted:function(){this.getDate(),this.webSocket()},methods:{filesWindow:function(t){var e=this;this.$Modal.confirm({width:"60%",render:function(o){return o("Input",{props:{value:t,autofocus:!0,type:"textarea",autosize:!0,readonly:!0},on:{input:function(t){e.value=t}}})}})},pubProgress:function(t){this.$Notice.open({title:"部署单号："+t[1],duration:3,render:function(e){return e("div",[e("p",t[3]),e("Progress",{style:{"margin-top":"5px"},props:{percent:Number(t[2]),"stroke-width":3}})])}})},webSocket:function(){var t=this;this.ws.onmessage=function(e){var o=e.data;if(0==o.indexOf("progress")){var n=o.split(":");t.pubProgress(n)}else if(0==o.indexOf("upload")){var a=o.split(":");t.msg=a[1],t.percent=a[3]/a[4]*100}else t.textarea+=o+"\n"}},Audit:function(t,e){var o=this,n=o.data6[t].Id;this.jQuery.ajax({type:"get",url:location.origin+"/task/audit",data:{id:n,audit:e},dataType:"json",withCredentials:!0,success:function(t){o.$router.go(0)}})},remove:function(t){var e=this;this.jQuery.ajax({type:"get",url:location.origin+"/task/del",data:{id:e.data6[t].Id},dataType:"json",withCredentials:!0,success:function(o){e.data6.splice(t,1)}})},getDate:function(){var t=location.origin+"/task/index",e=this;this.jQuery.ajax({type:"post",url:t,data:{},dataType:"json",withCredentials:!0,success:function(t){t.Expired<=0?e.$router.push({name:"login",params:{orderNum:"sfsd"}}):e.data6=t}})},pageUp:function(){if(!(this.page<1)){1!=this.page&&this.page--;var t=this;this.jQuery.ajax({type:"get",url:location.origin+"/task/index",data:{page:t.page},dataType:"json",withCredentials:!0,success:function(e){t.data6=e}})}},pageDown:function(){var t=this;t.page++,this.jQuery.ajax({type:"get",url:location.origin+"/task/index",data:{page:t.page},dataType:"json",withCredentials:!0,success:function(e){t.data6=e}})}},watch:{},data:function(){var t=this;return{msg:"",percent:0,progres_data:[],progres:[],page:1,Collapse:"Collapse1",textarea:"",columns7:[{title:"#",key:"Id",width:100},{title:"项目",key:"Project"},{title:"上线标题",key:"Title"},{title:"文件列表",key:"Files",render:function(e,o){return e("Input",{props:{rows:1,type:"text",value:o.row.Files,icon:"ios-albums-outline",readonly:!0},on:{"on-click":function(){t.filesWindow(o.row.Files)}}})}},{title:"版本",key:"Version"},{title:"审批状态",key:"Status",render:function(t,e){return console.log(e),1==e.row.Audit?t("Tag",{props:{color:"blue"}},"通过"):t("Tag",{props:{color:"green"}},"未审批")}},{title:"Action",key:"action",width:200,align:"center",render:function(e,o){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){confirm("确定允许上线？")&&(t.Collapse="Collapse",t.Audit(o.index,1))}}},"通过"),e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){confirm("确定拒绝上线？")&&(t.Collapse="Collapse",t.Audit(o.index,2))}}},"拒绝"),e("Button",{props:{type:"primary",size:"small"},on:{click:function(){t.remove(o.index)}}},"删除")])}}],data6:[{Id:1,Project:"John Brown",Title:18,Files:"1sfsf",Version:18,Status:23,Progress:32}],cityList:[{value:"New York",label:"New York"},{value:"London",label:"London"},{value:"Sydney",label:"Sydney"},{value:"Ottawa",label:"Ottawa"},{value:"Paris",label:"Paris"},{value:"Canberra",label:"Canberra"}],model1:""}}},S=$,P=(o("6e2e"),Object(i["a"])(S,R,F,!1,null,null,null)),O=P.exports,L=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Row",[o("Col",{attrs:{span:"4",offset:"9"}},[o("Card",{staticStyle:{width:"350px","margin-top":"300px"}},[o("p",{attrs:{slot:"title"},slot:"title"},[o("Icon",{attrs:{type:"ios-body-outline"}}),t._v("\n            登陆\n        ")],1),o("Form",{ref:"formInline",attrs:{model:t.formInline,rules:t.ruleInline,inline:""}},[o("FormItem",{attrs:{prop:"user"}},[o("Input",{attrs:{type:"text",placeholder:"Username"},model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}},[o("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),o("FormItem",{attrs:{prop:"password"}},[o("Input",{attrs:{type:"password",placeholder:"Password"},model:{value:t.formInline.password,callback:function(e){t.$set(t.formInline,"password",e)},expression:"formInline.password"}},[o("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1)],1),o("FormItem",[o("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formInline")}}},[t._v("Signin")])],1)],1)],1)],1)],1)},M=[],B=(o("7f7f"),o("1157")),N=o.n(B),z={data:function(){return{formInline:{user:"",password:""},ruleInline:{user:[{required:!0,message:"Please fill in the user name",trigger:"blur"}],password:[{required:!0,message:"Please fill in the password.",trigger:"blur"},{type:"string",min:6,message:"The password length cannot be less than 6 bits",trigger:"blur"}]}}},methods:{handleSubmit:function(t){var e=this,o=this;this.$refs[t].validate(function(t){t?N.a.ajax({type:"post",url:location.origin+"/user/login",data:{Username:"吴洋",PasswordHash:"w123123"},dataType:"json",withCredentials:!0,success:function(t){console.log(t),o.$router.push({name:"task",params:{orderNum:"sfsd"}})}}):e.$Message.error("Fail!")})}}},Q=z,U=Object(i["a"])(Q,L,M,!1,null,null,null),E=U.exports,D=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Row",{staticStyle:{margin:"5px 0"}},[o("Col",{attrs:{span:"22",offset:"1"}},[o("Table",{attrs:{border:"",columns:t.columns1,data:t.data1}})],1)],1)},A=[],H={mounted:function(){this.getDate()},methods:{getDate:function(){var t=this;this.jQuery.ajax({type:"get",url:location.origin+"/task/choose",data:{},dataType:"json",withCredentials:!0,success:function(e){e.Expired<=0?t.$router.push({name:"login",params:{orderNum:"sfsd"}}):t.data1=e}})},choose:function(t){this.$router.push({path:"/newtaskdetail",query:{project:t}})}},data:function(){var t=this;return{columns1:[{title:"环境",key:"Level",width:150,align:"center",render:function(t,e){return 1==e.row.Level?t("Tag",{props:{color:"green"}},"开发环境"):2==e.row.Level?t("Tag",{props:{color:"blue"}},"测试环境"):t("Tag",{props:{color:"red"}},"线上环境")}},{title:"项目",key:"Name"},{title:"HOSTS",key:"Hosts"},{title:"选择",key:"action",width:150,align:"center",render:function(e,o){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.choose(o.row.Id)}}},"选择")])}}],data1:[{Id:4,Level:"1",Name:"John Brown",Host:18}]}}},V=H,q=Object(i["a"])(V,D,A,!1,null,null,null),W=q.exports,G=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Row",{staticStyle:{"margin-bottom":"60px"}},[o("Col",{attrs:{span:"22",offset:"1"}},[o("Card",[o("p",{attrs:{slot:"title"},slot:"title"},[o("Icon",{attrs:{type:"ios-paper-outline"}}),t._v("\n                创建上线单\n            ")],1),[o("Form",{attrs:{model:t.formTop,"label-position":"top"}},[o("FormItem",{attrs:{label:"上线单类型"}},[o("RadioGroup",{model:{value:t.formTop.type,callback:function(e){t.$set(t.formTop,"type",e)},expression:"formTop.type"}},[o("Radio",{attrs:{label:"2"}},[o("span",[t._v("列表")])]),o("Radio",{attrs:{label:"1"}},[o("span",[t._v("全量")])])],1)],1),o("FormItem",{attrs:{label:"选择分支"}},[o("Select",{model:{value:t.branch,callback:function(e){t.branch=e},expression:"branch"}},t._l(t.cityList,function(e){return o("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}),1)],1),o("FormItem",{attrs:{label:"选择版本"}},[o("Select",{model:{value:t.versionModel,callback:function(e){t.versionModel=e},expression:"versionModel"}},t._l(t.versionList,function(e){return o("Option",{key:e,attrs:{value:e}},[t._v(t._s(e))])}),1)],1),o("FormItem",{attrs:{label:"上线单标题"}},[o("Input",{model:{value:t.formTop.title,callback:function(e){t.$set(t.formTop,"title",e)},expression:"formTop.title"}})],1),o("FormItem",{attrs:{label:"待上线文件列表"}},[o("Input",{attrs:{type:"textarea",rows:15},model:{value:t.formTop.files,callback:function(e){t.$set(t.formTop,"files",e)},expression:"formTop.files"}})],1),o("FormItem",{attrs:{label:"提交信息"}},[o("Input",{attrs:{type:"textarea",disabled:"",rows:6},model:{value:t.formTop.desc,callback:function(e){t.$set(t.formTop,"desc",e)},expression:"formTop.desc"}})],1),o("FormItem",[o("Button",{attrs:{type:"primary"},on:{click:function(e){return t.commitVervion()}}},[t._v("提交")])],1)],1)]],2)],1)],1)},J=[],Y={mounted:function(){var t=this.$route.query.project;console.log(t),this.projectId=t,this.getVersionList(t)},methods:{getVersion:function(){},getVersionList:function(t){var e=this;this.jQuery.ajax({type:"get",url:location.origin+"/version/list",data:{id:t},dataType:"json",withCredentials:!0,success:function(t){e.versionList=t}})},getVersionInfo:function(t){var e=this;this.jQuery.ajax({type:"get",url:location.origin+"/version/info",data:{commit:t,project:e.projectId},dataType:"json",withCredentials:!0,success:function(t){e.formTop.title=t[1].trim(),e.formTop.files=t[2].trim(),e.formTop.desc=t[0]}})},commitVervion:function(){if(confirm("填好了么？")){var t=this;this.jQuery.ajax({type:"post",url:location.origin+"/task/commit",data:{ProjectId:t.projectId,Audit:0,Title:t.formTop.title,FileTransmissionMode:t.formTop.type,FileList:t.formTop.files,CommitId:t.versionModel},dataType:"json",withCredentials:!0,success:function(e){t.$router.push({name:"task",params:{orderNum:"sfsd"}})}})}},test:function(t){console.log(t)}},watch:{versionModel:function(t,e){this.getVersionInfo(t)}},data:function(){return{phone:"apple",formTop:{title:"",files:"",desc:"",type:"2"},cityList:[{value:"MASTER",label:"MASTER"}],branch:"MASTER",versionModel:"version",versionList:[],projectId:""}}},K=Y,X=Object(i["a"])(K,G,J,!1,null,null,null),Z=X.exports,tt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Row",{staticStyle:{"margin-bottom":"60px"}},[o("Col",{attrs:{span:"24",offset:"0"}},[o("Card",[o("Row",[o("Table",{attrs:{border:"",columns:t.projectTitle,data:t.projectList}})],1)],1)],1)],1)},et=[],ot={methods:{infoWindow:function(t){var e=this;this.$Modal.confirm({width:"60%",render:function(o){return o("Input",{props:{value:t,autofocus:!0,type:"textarea",autosize:!0,readonly:!0},on:{input:function(t){e.value=t}}})}})},getProject:function(){var t=this;this.jQuery.ajax({type:"get",url:location.origin+"/project/index",data:{},dataType:"json",withCredentials:!0,success:function(e){t.projectList=e}})},show:function(t){this.$Modal.info({title:"User Info",content:"Name：".concat(this.data6[t].name,"<br>Age：").concat(this.data6[t].age,"<br>Address：").concat(this.data6[t].address)})},remove:function(t){this.data6.splice(t,1)}},mounted:function(){this.getProject()},data:function(){var t=this;return{projectTitle:[{title:"Id",key:"Id"},{title:"环境",key:"Level",width:150,align:"center",render:function(t,e){return 1==e.row.Level?t("Tag",{props:{color:"green"}},"开发环境"):2==e.row.Level?t("Tag",{props:{color:"blue"}},"测试环境"):t("Tag",{props:{color:"red"}},"线上环境")}},{title:"项目",key:"Name"},{title:"Hosts",key:"Hosts"},{title:"本地仓库",key:"DeployFrom"},{title:"仓库地址",key:"RepoUrl",render:function(t,e){return t("Tooltip",{props:{placement:"right",maxWidth:800}},[t("Input",{props:{rows:1,type:"text",value:e.row.RepoUrl,readonly:!0}}),t("div",{slot:"content"},[t("p",e.row.RepoUrl)])])}},{title:"远程仓库",key:"ReleaseLibrary"},{title:"远程部署",key:"ReleaseTo"},{title:"远程用户",key:"ReleaseUser"},{title:"部署后命令",key:"PostRelease",render:function(e,o){return e("Input",{props:{rows:1,type:"text",value:o.row.PostRelease,icon:"ios-albums-outline",readonly:!0},on:{"on-click":function(){t.infoWindow(o.row.PostRelease)}}})}},{title:"添加时间",key:"CreatedAt"},{title:"审核",key:"Audit",align:"center",render:function(e,o){return e("i-switch",{props:{value:!!o.row.Audit,size:"large"},on:{"on-change":function(){var e=(o.row.Audit+1)%2,n=o.row.Id,a=t;t.jQuery.ajax({type:"get",url:location.origin+"/project/audit",data:{id:n,audit:e},dataType:"json",withCredentials:!0,success:function(t){console.log(t),1!=t.Sta?a.$Message.info("修改失败:"+t.Msg):a.$Message.info("修改成功")}})}}},[e("span",{slot:"open"},"on"),e("span",{slot:"close"},"off")])}},{title:"操作",key:"action",width:300,align:"center",render:function(e,o){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){var e=o.row.Id,n=t;t.jQuery.ajax({type:"get",url:location.origin+"/project/init",data:{id:e},dataType:"json",withCredentials:!0,success:function(t){console.log(t),1!=t.Sta?n.$Message.info("修改失败:"+t.Msg):n.$Message.info("修改成功")}})}}},"初始化"),e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){var e=o.row.Id;t.$router.push({name:"editproject",params:{Id:e}})}}},"编辑"),e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){var e=o.row.Id,n=t;t.jQuery.ajax({type:"get",url:location.origin+"/project/copy",data:{id:e},dataType:"json",withCredentials:!0,success:function(t){n.$router.go(0)}})}}},"复制"),e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.show(o.index)}}},"版本"),e("Button",{props:{type:"error",size:"small"},on:{click:function(){if(confirm("确定删除？")){var e=o.row.Id,n=t;t.jQuery.ajax({type:"get",url:location.origin+"/project/del",data:{id:e},dataType:"json",withCredentials:!0,success:function(t){n.$router.go(0)}})}}}},"删除")])}}],projectList:[{name:"John Brown",age:18,address:"New York No. 1 Lake Park"}]}}},nt=ot,at=(o("10cd"),Object(i["a"])(nt,tt,et,!1,null,null,null)),rt=at.exports,st=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Row",{staticStyle:{"margin-bottom":"60px"}},[o("Col",{attrs:{span:"22",offset:"1"}},[o("Card",[o("p",{attrs:{slot:"title"},slot:"title"},[o("Icon",{attrs:{type:"ios-film-outline"}}),t._v("\n                新建项目\n            ")],1),o("Row",[o("Form",{ref:"formInline",attrs:{model:t.formInline,rules:t.ruleInline}},[o("Col",{attrs:{span:"6"}},[o("FormItem",{attrs:{label:"名称"}},[o("Input",{model:{value:t.formInline.Name,callback:function(e){t.$set(t.formInline,"Name",e)},expression:"formInline.Name"}})],1)],1),o("Col",{attrs:{span:"6"}},[o("FormItem",{attrs:{label:"环境"}},[o("Input",{model:{value:t.formInline.Level,callback:function(e){t.$set(t.formInline,"Level",e)},expression:"formInline.Level"}})],1)],1),o("Col",{attrs:{span:"12"}},[o("FormItem",{attrs:{label:"git地址"}},[o("Input",{model:{value:t.formInline.RepoUrl,callback:function(e){t.$set(t.formInline,"RepoUrl",e)},expression:"formInline.RepoUrl"}})],1)],1),o("Col",{attrs:{span:"6"}},[o("FormItem",{attrs:{label:"本地仓库"}},[o("Input",{model:{value:t.formInline.DeployFrom,callback:function(e){t.$set(t.formInline,"DeployFrom",e)},expression:"formInline.DeployFrom"}})],1)],1),o("Col",{attrs:{span:"6"}},[o("FormItem",{attrs:{label:"远程仓库"}},[o("Input",{model:{value:t.formInline.ReleaseLibrary,callback:function(e){t.$set(t.formInline,"ReleaseLibrary",e)},expression:"formInline.ReleaseLibrary"}})],1)],1),o("Col",{attrs:{span:"12"}},[o("FormItem",{attrs:{label:"远程部署"}},[o("Input",{model:{value:t.formInline.ReleaseTo,callback:function(e){t.$set(t.formInline,"ReleaseTo",e)},expression:"formInline.ReleaseTo"}})],1)],1),o("Col",{attrs:{span:"6"}},[o("FormItem",{attrs:{label:"发布用户"}},[o("Input",{model:{value:t.formInline.ReleaseUser,callback:function(e){t.$set(t.formInline,"ReleaseUser",e)},expression:"formInline.ReleaseUser"}})],1)],1),o("Col",{attrs:{span:"2",offset:"1"}},[o("FormItem",{attrs:{label:"审核"}},[o("i-switch",{attrs:{size:"large"}},[o("span",{attrs:{slot:"open"},slot:"open"},[t._v("ON")]),o("span",{attrs:{slot:"close"},slot:"close"},[t._v("OFF")])])],1)],1),o("Col",{attrs:{span:"2"}},[o("FormItem",{attrs:{label:"状态"}},[o("i-switch",{attrs:{size:"large"}},[o("span",{attrs:{slot:"open"},slot:"open"},[t._v("ON")]),o("span",{attrs:{slot:"close"},slot:"close"},[t._v("OFF")])])],1)],1),o("Col",{attrs:{span:"2"}},[o("FormItem",{attrs:{label:"ssh"}},[o("Button",{attrs:{type:"primary"},on:{click:function(e){return t.sshConTest()}}},[t._v("测试")])],1)],1),o("Col",{attrs:{span:"24"}},[o("FormItem",{attrs:{label:"机器列表"}},[o("Input",{attrs:{type:"textarea"},model:{value:t.formInline.Hosts,callback:function(e){t.$set(t.formInline,"Hosts",e)},expression:"formInline.Hosts"}})],1)],1),o("Col",{attrs:{span:"24"}},[o("FormItem",{attrs:{label:"发布后任务"}},[o("Input",{attrs:{type:"textarea",rows:8},model:{value:t.formInline.postRelease,callback:function(e){t.$set(t.formInline,"postRelease",e)},expression:"formInline.postRelease"}})],1)],1),o("Col",{attrs:{span:"24"}},[o("FormItem",[o("Button",{attrs:{type:"primary"},on:{click:function(e){return t.commitProject()}}},[t._v("提交")]),o("Button",{staticStyle:{"margin-left":"8px"}},[t._v("取消")])],1)],1)],1)],1)],1)],1)],1)},lt=[],it={data:function(){return{formInline:{user:"",password:""},ruleInline:{user:[{required:!0,message:"Please fill in the user name",trigger:"blur"}],password:[{required:!0,message:"Please fill in the password.",trigger:"blur"},{type:"string",min:6,message:"The password length cannot be less than 6 bits",trigger:"blur"}]}}},methods:{commitProject:function(){if(confirm("填好了么？")){console.log("form action"),console.log(this.formInline);var t=this;this.jQuery.ajax({type:"post",url:location.origin+"/project/commit",data:t.formInline,dataType:"json",withCredentials:!0,success:function(t){console.log(t)}})}},sshConTest:function(t){if(confirm("要测试么？")){var e=this;this.jQuery.ajax({type:"get",url:location.origin+"/project/sshtest",data:e.formInline,dataType:"text",withCredentials:!0,success:function(t){alert(t)}})}}}},ct=it,ut=(o("2dd4"),Object(i["a"])(ct,st,lt,!1,null,null,null)),pt=ut.exports,mt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Row",{staticStyle:{"margin-bottom":"60px"}},[o("Col",{attrs:{span:"22",offset:"1"}},[o("Card",[o("p",{attrs:{slot:"title"},slot:"title"},[o("Icon",{attrs:{type:"ios-film-outline"}}),t._v("\n                新建项目\n            ")],1),o("Row",[o("Form",{ref:"formInline",attrs:{model:t.formInline,rules:t.ruleInline}},[o("Col",{attrs:{span:"6"}},[o("FormItem",{attrs:{label:"名称"}},[o("Input",{model:{value:t.formInline.Name,callback:function(e){t.$set(t.formInline,"Name",e)},expression:"formInline.Name"}})],1)],1),o("Col",{attrs:{span:"6"}},[o("FormItem",{attrs:{label:"环境"}},[o("Input",{model:{value:t.formInline.Level,callback:function(e){t.$set(t.formInline,"Level",e)},expression:"formInline.Level"}})],1)],1),o("Col",{attrs:{span:"12"}},[o("FormItem",{attrs:{label:"git地址"}},[o("Input",{model:{value:t.formInline.RepoUrl,callback:function(e){t.$set(t.formInline,"RepoUrl",e)},expression:"formInline.RepoUrl"}})],1)],1),o("Col",{attrs:{span:"6"}},[o("FormItem",{attrs:{label:"本地仓库"}},[o("Input",{model:{value:t.formInline.DeployFrom,callback:function(e){t.$set(t.formInline,"DeployFrom",e)},expression:"formInline.DeployFrom"}})],1)],1),o("Col",{attrs:{span:"6"}},[o("FormItem",{attrs:{label:"远程仓库"}},[o("Input",{model:{value:t.formInline.ReleaseLibrary,callback:function(e){t.$set(t.formInline,"ReleaseLibrary",e)},expression:"formInline.ReleaseLibrary"}})],1)],1),o("Col",{attrs:{span:"12"}},[o("FormItem",{attrs:{label:"远程部署"}},[o("Input",{model:{value:t.formInline.ReleaseTo,callback:function(e){t.$set(t.formInline,"ReleaseTo",e)},expression:"formInline.ReleaseTo"}})],1)],1),o("Col",{attrs:{span:"6"}},[o("FormItem",{attrs:{label:"发布用户"}},[o("Input",{model:{value:t.formInline.ReleaseUser,callback:function(e){t.$set(t.formInline,"ReleaseUser",e)},expression:"formInline.ReleaseUser"}})],1)],1),o("Col",{attrs:{span:"2",offset:"1"}},[o("FormItem",{attrs:{label:"审核"}},[o("i-switch",{attrs:{size:"large"}},[o("span",{attrs:{slot:"open"},slot:"open"},[t._v("ON")]),o("span",{attrs:{slot:"close"},slot:"close"},[t._v("OFF")])])],1)],1),o("Col",{attrs:{span:"2"}},[o("FormItem",{attrs:{label:"状态"}},[o("i-switch",{attrs:{size:"large"}},[o("span",{attrs:{slot:"open"},slot:"open"},[t._v("ON")]),o("span",{attrs:{slot:"close"},slot:"close"},[t._v("OFF")])])],1)],1),o("Col",{attrs:{span:"2"}},[o("FormItem",{attrs:{label:"ssh"}},[o("Button",{attrs:{type:"primary"},on:{click:function(e){return t.sshConTest()}}},[t._v("测试")])],1)],1),o("Col",{attrs:{span:"24"}},[o("FormItem",{attrs:{label:"机器列表"}},[o("Input",{attrs:{type:"textarea"},model:{value:t.formInline.Hosts,callback:function(e){t.$set(t.formInline,"Hosts",e)},expression:"formInline.Hosts"}})],1)],1),o("Col",{attrs:{span:"24"}},[o("FormItem",{attrs:{label:"发布后任务"}},[o("Input",{attrs:{type:"textarea",rows:8},model:{value:t.formInline.PostRelease,callback:function(e){t.$set(t.formInline,"PostRelease",e)},expression:"formInline.PostRelease"}})],1)],1),o("Col",{attrs:{span:"24"}},[o("FormItem",[o("Button",{attrs:{type:"primary"},on:{click:function(e){return t.commitProject()}}},[t._v("提交")]),o("Button",{staticStyle:{"margin-left":"8px"}},[t._v("取消")])],1)],1)],1)],1)],1)],1)],1)},dt=[],ft={data:function(){return{Id:this.$route.params.Id,formInline:{user:"",password:""},ruleInline:{user:[{required:!0,message:"Please fill in the user name",trigger:"blur"}],password:[{required:!0,message:"Please fill in the password.",trigger:"blur"},{type:"string",min:6,message:"The password length cannot be less than 6 bits",trigger:"blur"}]}}},mounted:function(){console.log(this.Id);var t=this;this.jQuery.ajax({type:"get",url:location.origin+"/project/info?id="+t.Id,data:t.formInline,dataType:"json",withCredentials:!0,success:function(e){console.log(e),t.formInline=e.Data}})},methods:{commitProject:function(){if(confirm("填好了么？")){console.log("form action"),console.log(this.formInline);var t=this;this.jQuery.ajax({type:"post",url:location.origin+"/project/editcommit",data:t.formInline,dataType:"json",withCredentials:!0,success:function(e){console.log(e);var o=t.Id;this.$router.push({name:"editproject",params:{Id:o}})}})}},sshConTest:function(t){if(confirm("要测试么？")){var e=this;this.jQuery.ajax({type:"get",url:location.origin+"/project/sshtest",data:e.formInline,dataType:"text",withCredentials:!0,success:function(t){alert(t)}})}}}},yt=ft,ht=(o("b4ab"),Object(i["a"])(yt,mt,dt,!1,null,null,null)),gt=ht.exports;n["default"].use(p["a"]);var vt,It,bt=new p["a"]({routes:[{path:"/",name:"home",component:h},{path:"/task",name:"task",component:T},{path:"/taskaudit",name:"taskaudit",component:O},{path:"/newtask",name:"newtask",component:W},{path:"/newtaskdetail",name:"newtaskdetail",component:Z},{path:"/project",name:"project",component:rt},{path:"/project/new",name:"newproject",component:pt},{path:"/login",name:"login",component:E},{path:"/about",name:"about",component:w},{path:"/project/edit",name:"editproject",component:gt}]}),wt=o("e069"),xt=o.n(wt),kt=(o("dcad"),0),jt=[],Ct={UID:kt,HISTORY:jt},_t=Ct,Tt=Object(i["a"])(_t,vt,It,!1,null,null,null),Rt=Tt.exports;n["default"].prototype.jQuery=N.a,n["default"].prototype.GLOBAL=Rt,n["default"].use(xt.a),n["default"].config.productionTip=!1;var Ft="https:"==document.location.protocol?"wss":"ws",$t=document.location.port?":"+document.location.port:"",St=Ft+"://"+document.location.hostname+$t+"/echo",Pt=new WebSocket(St);n["default"].prototype.ws=Pt,new n["default"]({router:bt,render:function(t){return t(u)}}).$mount("#app")},"64a9":function(t,e,o){},"6e2e":function(t,e,o){"use strict";var n=o("af72"),a=o.n(n);a.a},9766:function(t,e,o){},aedd:function(t,e,o){},af72:function(t,e,o){},b39f:function(t,e,o){"use strict";var n=o("aedd"),a=o.n(n);a.a},b4ab:function(t,e,o){"use strict";var n=o("0c41"),a=o.n(n);a.a}});
//# sourceMappingURL=app.e592bf67.js.map