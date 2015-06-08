var fs=require('fs');
var arr=[];
//fs.createReadStream(path, [options])
var out=fs.createReadStream('./msg.txt');//,{start:12,end:21}
out.on('readable', function () {
    console.log('==========readable==========');
    var data;
    while(null!=(data=out.read(1024))){
        console.log('readed: '+data.length);
        arr.push(data);
    }
}).on('end', function () {
    var result=Buffer.concat(arr);
    console.log(result.toString());
})