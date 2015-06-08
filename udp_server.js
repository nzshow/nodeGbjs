/*
* var server=dgram.createSocket(type,callback(msg,rinfo))
* */
//socket.bind(port, [address], [callback])
//socket.send(buf, offset, length, port, address, [callback(err,bytes)])
//buf Buffer 对象，要发送的消息
//offset Integer，Buffer 中消息起始偏移值。
//length Integer，消息的字节数。
//port Integer，目标端口
//address String，目标 IP
//callback Function，可选，当消息被投递后的回调。
var dgram=require('dgram');
var util=require('util');
var server=dgram.createSocket('udp4', function (msg,rinfo) {
    console.log(util.inspect(rinfo));
    console.log('received '+msg);
    var buf=new Buffer('服务器收到：'+msg);
    server.send(buf,0,buf.length,rinfo.port,rinfo.address)
})

server.bind(40000,'localhost')






