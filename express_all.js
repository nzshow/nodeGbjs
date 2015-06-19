var express=require('express');
var path=require('path');
var app=express();
app.use(function (req,res,next) {//不给路径参数，表示所有请求都执行这个中间件处理
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    next();
})
app.get('/', function (req,res) {
    res.end('<h1>珠峰培训</h1>')
});

app.get('/a', function (req,res) {
    res.end('<h1>我是雷锋</h1>')
});

app.listen(8888, function (err) {
    if(err)
        console.error(err);
    else
        console.log("Server started.")
});