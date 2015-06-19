/*
* 中间件
* 1.app.use([path],function(req,res,next))
* */
var express=require('express');
var path=require('path');
var app=express();
app.use('/coffee/:person', function (req,res,next) {
    res.coffee ='add water';
    next();
});

app.use('/coffee/:person', function (req,res,next) {
    res.coffee +='add coffee';
    if(req.params['person']=='black'){
        res.end(res.coffee)
    }else{
        next();
    }

});

app.use('/coffee/:person', function (req,res,next) {
    res.coffee +='add sugar';
    next();
});

app.use('/coffee/:person', function (req,res,next) {
    res.coffee +='add milk';
    next();
});

app.get('/coffee/:person', function (req,res) {
    res.end(res.coffee);
});

app.listen(8888, function (err) {
    if(err)
        console.error(err);
    else
        console.log("Server started.")
});
