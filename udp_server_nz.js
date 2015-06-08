var dgram=require('dgram');
var util=require('util');
var server=dgram.createSocket('udp4', function (msg,rinfo) {
    console.log(util.inspect(rinfo));
    console.log('received '+msg);
    var buf=new Buffer('服务器收到：'+msg,'utf8');
    server.send(buf,0,buf.length,rinfo.port,rinfo.address)
});
//socket.bind(prot,[address],[callback])
//socket.send(buf,offset,length,port,address,callback(err,bytes))
server.bind(8080,'localhost', function () {
    console.log('Success!')
});
