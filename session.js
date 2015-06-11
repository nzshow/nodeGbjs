/*
session 会话
 */
var http=require('http'),
    url=require('url'),
    cookieUtils=require('./cookieUtils');
var uuid=require('uuid');//生成一个32不重复的字符串
//会话对象 key就是会话ID value就是存储数据的session对象
var session ={};
var SESSION_ID='zfkey';
var EXPTIME=3600*1000;
http.createServer(function (req,res) {
    var urlObj=url.parse(req.url);
    if('/favicon.ico'==urlObj.pathname){
        res.writeHead(404);
        res.end(http.STATUS_CODES[404])
    }else{
        var now=new Date().getTime();//声明当前时间
        var cookieObj=cookieUtils.parse(req.headers.cookie);
        if(cookieObj[SESSION_ID]){
            //res.end(JSON.stringify(cookieObj))
            var sessionId=cookieObj[SESSION_ID];//取出卡号
            var sessionObj=session[sessionId];//得到会员信息
            //如果没有会员信息，或者过期
            if(!sessionObj || !(sessionObj.expTime) || sessionObj.expTime.getTime()<now){
                var newSessionObj={money:150,expTime:new Date(now+EXPTIME)};
                var newSessionId=uuid.v4()+"_"+now+"_"+Math.random();
                session[newSessionId]=newSessionObj;
                res.writeHead(200,{
                    "Content-Type":"text/html;charset=utf-8",
                    "Set-Cookie":SESSION_ID+"="+sessionId
                });
                delete cookieObj[SESSION_ID];//删除老卡
                res.end("欢迎光临，但你的卡到期了，给你换张新卡，你的新卡号是："+newSessionId+"，账户余额："+newSessionObj.money);
            }else{
                sessionObj.expTime=new Date(now+EXPTIME);//延长有效期
                sessionObj.money-=15;
                res.writeHead(200,{
                    "Content-Type":"text/html;charset=utf-8"
                });
                res.end("欢迎回来，你的会员卡有效期延长到了"+sessionObj.expTime.toLocaleString()+"，你的会员卡余额为："+sessionObj.money);
            }
        }else{//如果客户端没有sessionId
            var sessionObj={money:150,expTime:new Date(now+EXPTIME)};
            //生成卡号
            var sessionId=uuid.v4()+"_"+now+"_"+Math.random();
            //把卡号在服务器端注册
            session[sessionId]=sessionObj;
            res.writeHead(200,{
                "Content-Type":"text/html;charset=utf-8",
                "Set-Cookie":SESSION_ID+"="+sessionId
            });
            res.end("欢迎光临，你的卡号是："+sessionId+"，账户余额："+sessionObj.money);
        }
    }
}).listen(8080, function () {
    console.log('Server started.');
})
