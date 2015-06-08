//删除空文件夹同步版
var fs=require('fs');
/*function DelEmptyDirSync(dirname){
    if(fs.existsSync(dirname)){
        var dirList=fs.readdirSync(dirname);
        var allDir=[];
        dirList.forEach(function (filename){
            if(fs.statSync(dirname+'/'+filename).isDirectory()){
                console.log('文件夹：'+dirname+'/'+filename);
                DelEmptyDir(dirname+'/'+filename);
                allDir.push(dirname+'/'+filename);
            }else{
                console.log('文件：'+dirname+'/'+filename);
            }
        });

        for(var i=0;i<allDir.length;i++){
            if(fs.readdirSync(allDir[i])==''){
                fs.rmdirSync(allDir[i]);
                console.log('删除了空文件夹：'+allDir[i]);
            }
        }
    }
}

DelEmptyDir('./test')*/


/*function DelEmptyDir(dirname){
    fs.exists(dirname,function (exists){
        if(exists){
            fs.readdir(dirname, function (err,files) {
                if(err){
                    console.error(err);
                }else{
                    files.forEach(function (filesname){
                        console.log(dirname+'/'+filesname);
                        DelEmptyDir(dirname+'/'+filesname);
                        fs.stat(dirname+'/'+filesname, function () {
                            fs.rmdir(dirname+'/'+filesname,function(){
                                console.log('删除了：'+dirname+'/'+filesname)
                            })
                        })
                    })
                }
            })
        }else{
            console.error(exists);
        }
    })
}
DelEmptyDir('./test')*/

function DelEmptyDir(dirname,callback){
    fs.exists(dirname,function (exists){
        if(exists){
            fs.readdir(dirname,function(err,files){
                if(err){
                    console.error(err)
                }else{
                    files.forEach(function (filename){
                        console.log(dirname+'/'+filename);
                        DelEmptyDir(dirname+'/'+filename,function () {
                            //console.log(dirname + '/' + filename);
                            fs.rmdir(dirname+'/'+filename,function(err){
                                if(err){
                                    console.error(err)
                                }else{
                                    console.log('删除文件夹:'+dirname+'/'+filename)
                                }
                            })
                        });

                    })
                }
            })
        }else{
            console.log('目标文件夹不存在')
        }
    })
}
DelEmptyDir('./test',function (){})
