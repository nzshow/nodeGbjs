var url=require('url');
var http=require('http');
http.createServer(function (req,res) {
    var urlObj=url.parse(req.url);
    if('/favicon.ico'==urlObj.pathname){
        res.writeHead(404);
        res.end(http.STATUS_CODES[404])
    }else if('/write'==urlObj.pathname){
        res.writeHead(200,{
            "Content-Type":"text/html;charset==utf-8",
            "Set-Cookie":"name="+encodeURIComponent('珠峰')
        })
        res.end('ok');
    }else{
        var cookie=req.headers.cookie;
        res.writeHead(200,{"Content-Type":"text/html;charset==utf-8"});
        res.end(cookie)
    }
}).listen(8080, function () {
    console.log('Server started.')
})


