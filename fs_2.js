// fs.readFile(filename, [options], callback(err,data))
// option flag r-->read w-->write a-->append encoding

var fs=require('fs');
//var data=fs.readFileSync('./log.txt','utf8');
//console.log(data);

fs.readFile('./err2.txt',{encoding:'utf8'},function(err,data){
    if(err)
        console.log(err);
    else
        console.log(data);
});


var data=fs.readFileSync('./log.txt',{encoding:'utf8',flag:'r'});
console.log(data)