//fs.readdir(path, callback)
var fs=require('fs');
/*fs.readdir('./test',function(err,files){
    if(err)
        console.error(err);
    else
        console.log('读取成功：'+files)
})*/

//fs.stat(path, callback(err,stats));
/*fs.stat('./test',function(err,stat){
    console.log(stat)
})*/
/*
{ dev: 0,//设备号
    mode: 16822,//权限
    nlink: 1,
    uid: 0,
    gid: 0,
    rdev: 0,
    ino: 0,
    size: 0,
    atime: Tue Jun 02 2015 00:00:00 GMT+0800 (中国标准时间),  //访问时间
    mtime: Tue Jun 02 2015 10:45:38 GMT+0800 (中国标准时间),  //修改时间
    ctime: Tue Jun 02 2015 10:45:37 GMT+0800 (中国标准时间) } //创建时间
*/
/*fs.exists('./test/test1',function(exists){
    console.log(exists)
})

//绝对路径
fs.realpath('./test', function (err,path) {
    console.log(path)
})*/


//fs.utimes(path, atime, mtime, callback)
//fs.utimesSync(path, atime, mtime)
/*fs.utimes('./test', new Date(),new Date(),function(){
    console.log('Success!')
});*/


//fs.chmod(path, mode, callback)
//fs.chmodSync(path, mode)
/*fs.chmod('/test','0666', function (err) {
    console.log('修改权限成功！')
})*/


//fs.rename(oldPath, newPath, callback)
//fs.renameSync(oldPath, newPath)
/*fs.rename('./test/test1','./test/test2',function(err){
    if(err)
        console.error(err)
    else
        console.log('文件重命名成功！')
})*/


/*fs.writeFileSync('2.txt',new Buffer(1024*64),{enconding:'utf8'});
var filePath='./2.txt';
fs.stat(filePath,function(err,stat){
    console.log('before: '+stat.size);
    fs.truncate(filePath,100,function(err){
        fs.stat(filePath,function(err,stat) {
            console.log('after: '+stat.size);
        })
    })
})*/
//console.log(fs.readdirSync('./test/test1'));
var path=require('path');
function DelEmptyDir(dirname){
    var allEmptyDir=[];
    if(fs.existsSync(dirname)){
        var dirList=fs.readdirSync(dirname);
        dirList.forEach(function (filename){
            if(fs.statSync(dirname+'/'+filename).isDirectory()){
                console.log('文件夹:'+dirname+'/'+filename);
                DelEmptyDir(dirname+'/'+filename);
                var dir=dirname+'/'+filename;
                allEmptyDir.push(dir);
            }else{
                console.log('文件:'+dirname+'/'+filename);
            }

        })
    }

    for(i=0;i<allEmptyDir.length;i++){
        if(fs.readdirSync(allEmptyDir[i])==''){
            fs.rmdirSync(allEmptyDir[i]);
            console.log('删除空文件夹:'+allEmptyDir[i]+',成功！')
        }
    }
}
DelEmptyDir('./test');
