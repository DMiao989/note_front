//1、引入Express
const express = require('express')
//2、创建应用对象
const app = express()
// console.log(app)
/// 设置请求头
app.all('*', function (req, res, next) {
    if (req.path !== "/" && !req.path.includes(".")) {
        res.header('"Access-Control-Allow-Credentials", true');
        res.header("Access-Control-Allow-Origin", req.headers["origin"] || "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("Content-Type", "application/json;charset=utf-8");
    }
    next();
});

//3、创建路由规则
	//res是对请求报文的封装   req是对响应报文的封装
	app.get('/mine',(req, res) =>{
        res.send("hello,express")
	})
//4、监听端口，启动服务
	app.listen(8000,() => {
		console.log('服务器已经启动http://127.0.0.1:8000，8000端口监听中')
	})