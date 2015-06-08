//readFile readFileSync
// fs.readFile(filename, [options], callback)
// fs.readFileSync(filename, [options])
//不制定编码 输出Buffer对象

var fs=require('fs');
var data=fs.readFileSync('./log.txt','utf8');
console.log(data);

fs.readFile('./err.txt','utf8',function(err,data){
    if(err)
        console.log('404 not found');
    else
        console.log(data);
});
