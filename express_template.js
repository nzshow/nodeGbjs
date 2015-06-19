var express=require('express');
var path=require('path');
var app=express();
app.set('view engine','html');
app.set('views',__dirname);
app.engine('.html',require('ejs').__express);
app.use(express.static(__dirname));
app.get('/', function (req,res) {
    res.render('index',{name:'leo'})
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