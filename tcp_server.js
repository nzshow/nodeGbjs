var fs=require('fs');
var net=require('net');
var util=require('util');
var socketOut=fs.createWriteStream('./socketOut.txt',{flags:'a'});
var server=net.createServer(function (socket){
    console.log('服务器已连接：'+socket.address().address);
    socket.write('Hello!\r\n');

    server.getConnections(function (err,count) {
        console.log('现在一共有'+count+'个连接。');
    });
    socket.pause();
    setTimeout(function () {
        socket.pipe(socketOut,{end:true});
        socket.resume();
    },5000)
    
    socket.on('data', function (chunk) {
        socket.pause();
        setTimeout(function () {
            socket.resume();
            ssocket.pipe(socketOut,{end:true})
        },5000)
    })
    /*socket.setEncoding('utf8');
    socket.on('data', function (chunk) {
        console.log(chunk);
        console.log('已收到%d个字节数据。',socket.bytesRead);
        socketOut.write(chunk);
    });

    socket.on('end', function () {
        console.log('客户端连接关闭。')
    });
    socket.on('close', function () {
        console.log('客户端已退出。')
    });*/
    //socket.pipe(socketOut);
}).listen(8080,0,100,function(){//server.listen(port, [host], [backlog], [callback])
    console.log('Start listen '+util.inspect(server.address()))
});

server.on('end', function () {
    console.log('Server closed.')
});


server.on('error', function (err) {
    if(err.code){
        console.log(err.code)
    }
})