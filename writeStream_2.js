var fs=require('fs');
var src=fs.createReadStream('./bigFile.txt');//源文件
var desc=fs.createWriteStream('./bigFileWrite.txt');//目标文件
src.on('data',function(data){
    var flag=desc.write(data);
    console.log(flag)
})
//drain  抽干
desc.on('drain',function(){
    console.log('操作系统缓存区全部输出。')
})

src.pipe(desc,{end:false});
src.on('end', function () {
    desc.end('Good Bye.')
    console.log('Over!')
})