/**
 * Created by Administrator on 2015/5/21.
 */
var fs=require('fs');
//readFile  readFileSync
/*fs.readFile('sum.js','utf-8', function (err,data) {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})*/

var data=fs.readFileSync('sum.js','utf-8');
console.log(data)