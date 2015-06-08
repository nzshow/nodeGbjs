var fs=require('fs');
//fs.open(path, flags, [mode], callback(err,fd))  fd文档标识符
//0 stdin 标准输入  1 stdout 标准输出   2 标准错误输出
//fd 递增

/*fs.open('./log.txt','r', function (err,fd) {
    if(err)
        console.error(err);
    else
        console.log(fd) //3
})*/

//fs.read(fd, buffer, offset, length, position, callback(err, bytesRead, buffer))
//从指定的文档标识符fd读取文件数据。
//buffer 是缓冲区，数据将会写入这里。
//offset 是开始向缓冲区 buffer 写入的偏移量。
//length 是一个整形值，指定了读取的字节数。
//position 是一个整形值，指定了从哪里开始读取文件，如果position为null，将会从文件当前的位置读取数据。
//回调函数给定了三个参数， (err, bytesRead, buffer)， 分别为错误，读取的字节和缓冲区。

fs.read()