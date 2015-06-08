var fs=require('fs');
var net=require('net');
var util=require('util');
var fileOut=fs.createWriteStream('./mt.txt');
var server=net.createServer({allowHalfOpen:true},function (socket) {
    socket.setEncoding('utf8');
    var rs=fs.createReadStream('./msg.txt');
    rs.on('data', function (data) {
        socket.write(data);
       /* var flag=socket.write(data);
        console.log(flag);
        console.log("缓存队列里有%d个字符",socket.bufferSize)*/
    });
    var s='';
    socket.on('data', function (data) {
        s=data+'too';
        console.log(s)
    })

    setInterval(function () {
        console.log(s)
    },1000)
}).listen(8080, function () {
    console.log('Server started.')
});