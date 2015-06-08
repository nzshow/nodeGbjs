/**
 1. 接下来介绍如何从指定的位置开始读文件
 fs.open(filename,flags,[mode],callback(err,fd))
    filename
    flags w r a
    mode 写入的文件权限
    callback
      err 第一个参数为打开文件失败时触发的错误对象
      fd  第二个参数为一个整数值，代表打开文件的文件描述符,文件描述符其实就是一个系统打开文件的索引
      文件描述符其实就是一个打开文件的索引，也是累加的,为什么是3呢
      open返回的文件描述符一定是最小的未用描述符数值
      0标准输入 stdin，１与进程的标准输出 stdout，2 标准错误输出stderr。
 */

var fs = require('fs');
fs.open('./msg','r',function(err,fd){
    console.log(fd);
});

/**
 * 2.现在就可能读取文件了
 fs.read(fd,buffer,offset,length,position,callback(err,bytesRead,buffer))
    buffer表示读到哪个缓存区中
    offset表示向缓存区中写入数据时的开始位置
    length表示从文件中件中读取到的字节数
    position表示从文件中读取的开始位置
    callback
      err错误对象
      bytesRead表示实际读取到的字节数
      buffer 为读到的缓存区对象
 */
//把"珠峰培训"读出来
fs.open('./msg','r',function(err,fd){
    var buff = new Buffer(6);
    //如果是7个的话，其实只能读到6个字符
    fs.read(fd,buff,0,6,3,function(err,bytesRead,buffer){
        console.log(bytesRead);
        console.log(buff);
        console.log(buffer.toString());
        console.log(buff == buffer);
    });
});
/**
 * 3.可以多次读取
 * read的position参数指定读取文件开始位置(以字节为单位)，如果该参数为null,将从文件的当前被读到位置处
 * (前一次读取位置+读取字节数)开始读取
 */
fs.open('./msg','r',function(err,fd){
    var buf = new Buffer(255);
    fs.read(fd,buf,0,6,3,function(err,bytesRead1,buf1){
        console.log(buf.slice(0,bytesRead1).toString());
        fs.read(fd,buf,bytesRead1,3,null,function(err,bytesRead2,buf2){
            console.log(buf.slice(0,bytesRead1+bytesRead2).toString());
        });
    })
});

//当然我们也可以使用同步的方式进行读取
// 下面我们再以同步的方式进行读取"我喜欢编程"中的"喜欢编"三个字到一个缓存区
fs.open('./msg','r',function(err,fd){
    if(err)
        console.log(err);
    else{
        var buf = new Buffer(255);
        var bytesRead = fs.readSync(fd,buf,0,6,3);
        console.log("bytesRead="+bytesRead);
        console.log(buf.slice(0,bytesRead).toString());
    }
});