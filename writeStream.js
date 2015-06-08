/*
* fs.createWriteStream(path, [options])
* path
* flags 'w'
* encoding 指定编码
* start 文件开始写入位置
* writeable 对象
* flag=write (chunk,[encoding],callback())
* */

var fs=require('fs');
var src=fs.createReadStream('./msg.txt');//源文件
var desc=fs.createWriteStream('./msgWrite.txt');//目标文件

desc.on('open', function () {
    console.log('Target file has been opened.')//目标已被打开
});
src.on('data', function (data) {
    desc.write(data)
});

src.on('end', function () {
    desc.end('bye bye.', function () {
        console.log('File write complete.');//文件写入完毕
        console.log('Write %d bytes',desc.bytesWritten);
    })
})

fs.readFile('./msgWrite.txt','utf8', function (err,data) {
    if(err)
        console.error(err);
    else
        console.log(data)
})