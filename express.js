var express=require('express');
var path=require('path');
var app=express();
app.get('/', function (req,res) {
    res.send('Hello World.')
});

app.get('/a', function (req,res) {
    res.send(404)
});

app.get('/b', function (req,res) {
    res.send({name:'leo ning'})
});

app.get('/c', function (req,res) {
    res.sendFile(path.join(__dirname,'express.html'))
});


app.listen(8888, function (err) {
    if(err)
        console.error(err);
    else
        console.log("Server started.")
});