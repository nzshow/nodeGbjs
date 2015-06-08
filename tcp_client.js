var net=require('net');
var util=require('util');
var fs=require('fs');
var socket=new net.Socket();
socket.setEncoding('utf8');
socket.connect(8080,function () {
    //console.log(util.inspect(socket));
    socket.write('Hello server!');
    setTimeout(function () {
        socket.end('Bye bye.')
    },1000)
});

socket.on('error', function (err) {
    console.error(err);
    socket.destroy()
});

socket.on('end', function () {
    console.log('客户端关闭连接。')
});

socket.on('data', function (data) {
    console.log('服务器说：'+data)
})