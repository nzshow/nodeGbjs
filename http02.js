var http=require('http');
var util=require('util');
var url=require('url');
var fs=require('fs');
var onRequest=function (req,res) {
    var urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;
    var query=urlObj.query;

    if(pathname=='/'){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        fs.createReadStream('./http_index.html').pipe(res);
    }else if(pathname=='/post'){
        req.on('data', function (data) {
            res.write(data)
        });
        req.on('end', function () {
            res.end(util.inspect(query))
        })
    };

    //console.log('a new request');
    //res.end('end');
};
var app=http.createServer(onRequest).listen(8080, function () {
    console.log('Server started.')
})

app.on('connection', function (socket) {
    console.log('a new connection')
});

//一个连接可以对应多个请求，一个请求至少对应一个连接

app.on('close', function () {
    console.log('close')
});

app.on('error', function (err) {
    console.error(err)
});

/*app.setTimeout(60*1000, function (socket) {
    console.log('服务器超时')
})*/


