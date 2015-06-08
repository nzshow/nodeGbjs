var fs=require('fs');
//fs.writeFile(filename, data, [options], callback)

//filename {String}
//data {String | Buffer}
//options {Object}
    //encoding {String | Null} default = 'utf8'
    //mode {Number} default = 438 (aka 0666 in Octal) 1=可执行 2=写入 4=读取
    //flag {String} default = 'w'
//callback {Function}
var msg='And while marketers have been proficient in analyzing how to create successful brands and satisfy customers, most of their strategies mirror those that other businesses have already implemented.';

//fs.writeFile('./writeFile.txt',msg,{flag:'w',mode:0666,encoding:'utf8'},function (err){
//    console.log('Success!')
//})

fs.writeFile('./writeFile.txt',new Buffer('第二行'),{flag:'w',mode:0666,encoding:'utf8'},function (err){
    console.log('Write success!')
})

fs.appendFile('./writeFile.txt','追加行', function (err) {
    console.log('Append write successfully!')
})
//3个8位字节转化为4个6位字节
//binary 2进制
fs.readFile('./img.jpg','base64', function (err,data) {
    if(err)
        console.error(err);
    else
        fs.writeFile('./logo.jpg',data,'base64', function (err) {
            console.log('Write success!')
        })
})
//fs.writeFileSync(filename, data, [options])