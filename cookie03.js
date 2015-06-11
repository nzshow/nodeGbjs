var url=require('url');
var http=require('http');
var cookieUtils=require('./cookieUtils')
http.createServer(function (req,res) {
    var urlObj=url.parse(req.url);
    if('/favicon.ico'==urlObj.pathname){
        res.writeHead(404);
        res.end(http.STATUS_CODES[404])
    }else if('/write'==urlObj.pathname){
        res.writeHead(200,{
            "Content-Type":"text/html;charset==utf-8",
            "Set-Cookie":cookieUtils.toArray({name:"珠峰",age:27},{
                path:"/path2",
                maxAge:'10',//优先级高
                domain:'localhost',
                expires:new Date(new Date().getTime()+3600*1000),
                httpOnly:true
            })

        })
        res.end('ok');
    }else{
        var cookie=req.headers.cookie;
        res.writeHead(200,{"Content-Type":"text/html;charset==utf-8"});decodeURIComponent()
        res.end(JSON.stringify(cookieUtils.parse(cookie)))
    }
}).listen(8080, function () {
    console.log('Server started.')
})


