var fs=require('fs');
var path=require('path');
function mkDirSync(dirname,mode){
    if(fs.existsSync(dirname)){
        return true;
    }else{
        if(mkDirSync(path.dirname(dirname),mode)){
            fs.mkdirSync(dirname,mode);
            console.log('创建'+dirname+'文件夹成功！')
            return true;
        }
    }
}
mkDirSync('test/test2','0666')

function mkDir(dirname,mode,callback){
    fs.exists(dirname,function (exists){
        if(exists){
            callback();
        }else{
            console.log(path.dirname(dirname));
            mkDir(path.dirname(dirname),mode, function () {
                fs.mkdir(dirname,mode,callback)
            })
        }

    })
}
mkDir('test2/23','0666')
/*
fs.mkdir('./test/test2','0666',function(err){
    if(err)
        console.error('创建失败！')
    else
        console.log('创建成功！')
})*/
