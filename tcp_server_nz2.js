var fs=require('fs');
var util=require('util');
var net=require('net');
var server=net.createServer(function (socket) {
    console.log('服务器已连接：'+util.inspect(socket.address()));
    socket.setEncoding('utf8');
    socket.write('Hello!\r\n');
    socket.on('data', function (data) {
        console.log(data);
        console.log('已接收%s个字节',socket.bytesRead);
    })
    server.getConnections(function (err,count) {
        if(err)
            console.error(err);
        else
            console.log('已有%s个用户连接。',count)
    });
    socket.on('end', function () {
        console.log('客户端已断开。')
    });

    socket.on('close', function () {
        console.log('客户端已关闭。')
    })
}).listen(8080, function () {
    console.log('Server started.')
});

server.on('error', function (err) {
    if(err.code)
        console.error(err.code)
});

server.on('end', function () {
    console.log('服务器已断开。')
});

server.on('close', function () {
    console.log('服务器已关闭。')
})