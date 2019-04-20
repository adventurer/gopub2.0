package middleware

import "github.com/kataras/iris"

func AccessOrigin(ctx iris.Context) {
	ctx.Header("Access-Control-Allow-Origin", "*")
	ctx.Next()
}
