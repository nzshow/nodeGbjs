//先序遍历，深度优先
var fs=require('fs');
var path=require('path');

/*function deep(dir){
    console.log(dir);
    var stat=fs.statSync(dir);

    if(stat.isDirectory()){
        var files=fs.readdirSync(dir)
        for(var i=0;i<files.length;i++){
            deep(path.join(dir,files[i]));
        }
    }
}*/

function wide(dir){
    console.log(dir);
    var stat=fs.statSync(dir);
    var fileArray=[];

    if(stat.isDirectory()){
        var files=fs.readdirSync(dir)
        for(var i=0;i<files.length;i++){
            console.log(files[i])
        }
    }
}

//deep('./test');
wide('./test')