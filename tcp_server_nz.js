var fs=require('fs');
var util=require('util');
var net=require('net');
var socketOut=fs.createWriteStream('./socketOut2.txt',{flags:'a'});
var server=net.createServer(function (socket) {
    console.log('服务器已连接：'+socket.address().address+' | '+socket.address().port)
    socket.write('Hello!\r\n');

    server.getConnections(function (err,count) {
        console.log('已有'+count+'个用户连接上')
    });
    socket.setEncoding('utf8');
    socket.pause();
    /*var t=setTimeout(function () {
        socket.resume();
        socket.pipe(socketOut,{end:false});
        t.unref();
    },5000);*/
    socket.setTimeout(10*1000);
    socket.on('timeout', function () {
        socket.resume();
        socket.pipe(socketOut,{end:true});
    })
    socket.on('data', function (chunk) {
        socket.pause();
        //t.ref();
        /*setTimeout(function () {
            socket.resume();
            socket.pipe(socketOut,{end:true});
        },5000);*/
    })
    /*socket.on('data', function (chunk) {
        console.log(chunk);
        socketOut.write(chunk);
        socket.pipe(socketOut,{end:true})
    })

    socket.on('end', function () {
        console.log('客户端已断开。');

    });
    socket.on('close', function () {
        console.log('客户端已退出。');
        server.getConnections(function (err,count) {
            console.log('现有'+count+'个在线用户')
        });
    });*/

}).listen(8080, function () {
    console.log('服务器已启动。')
});

server.on('end', function () {
    console.log('Server closed.')
});

server.on('close', function (err) {
    if(err.code){
        console.error(err.code)
    }
})