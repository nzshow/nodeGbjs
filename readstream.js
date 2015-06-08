//fs.createReadStream(path, [options])
/*
 * flag r
 * encoding null
 * autoclose 是否关闭文件描述符 默认 true false时调用close()关闭
 * start 开始读取位置
 * end 指定文件结束位置（包含）
 * */
var fs=require('fs');
var out=fs.createReadStream('./msg.txt');//,{start:12,end:21}
out.on('open',function(){
    console.log('File is opened.')
})

out.on('data',function(data){
    console.log('Get data: '+data)
})

out.pause();
out.on('end',function(){
    console.log('File read end.')
})

out.on('close',function(){
    console.log('File has been closed.')
})

out.on('error',function(err){
    console.error(err)
})

setInterval(function () {
    out.resume();
},5000)