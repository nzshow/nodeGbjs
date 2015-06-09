var net=require('net'),util=require('util');
var clients={};

function broadcast(uname,msg){
    msg+='\r\n>';
    for(var client in clients){
        if(uname!=client)
            clients[client].write(msg);
    }
}

function listen(socket) {
    var uname;
    server.getConnections(function (err,count) {
        broadcast(uname,'现在有'+count+'个用户连接。')
    });
    socket.write('欢迎，请输入用户名\r\n>');
    socket.on('data', function (data) {
        if(uname){
            broadcast(uname,uname+':'+data)
        }else{
            if(clients[data]){
                socket.write('用户名已存在，请修改用户名\r\n>')
            }else{
                uname=data;
                clients[uname]=socket;
                broadcast(uname,uname+'已加入聊天室。');
                server.getConnections(function (err,count) {
                    broadcast(uname,'现在有'+count+'个用户连接。')
                });
            }
        };
    });

    socket.on('close', function () {
        broadcast(uname,uname+'已离开聊天室。')
        delete clients[uname];
        socket.destroy();
        server.getConnections(function (err,count) {
            broadcast(uname,'现在有'+count+'个用户连接。')
        });
    })
}

var server=net.createServer(listen);
server.listen(8080, function () {
    console.log('Chat server has started.')
})