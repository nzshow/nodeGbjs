//new
//net.createServer([options], [connectionListener])
//var server=net.createServer()

var net=require('net');
var server=net.createServer(function (socket){
    console.log(socket.address())
}).listen(8888);



