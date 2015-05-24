/**
 * Created by nz on 2015/5/23.
 */
var http=require('http');
var writer=function (req,res){
    res.write('ddd')
}
var server=http.createServer(writer);
server.listen(8080);