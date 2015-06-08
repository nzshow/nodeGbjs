var dgram=require('dgram');
var util=require('util');
var message=new Buffer('Hello','utf8');
var client=dgram.createSocket('udp4');
client.send(message,0,message.length,8080,'localhost', function (err,bytes) {
    if(err)
        console.error(err);
    else
        console.log(bytes)
});

client.on('message', function (msg,rinfo) {
    console.log('收到服务器端的数据%s',msg);
    console.log(util.inspect(rinfo))
});

client.on('close', function () {
    console.log('closed.')
})