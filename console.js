/**
 * Created by Administrator on 2015/5/20.
 */
console.log('This is a log.');
console.info('This is an info.');
console.error('This is an error.');
console.warn('This is a warn.')

console.time('test');
for(var i=0;i<1000000;i++){}
console.timeEnd('test')
/*
* console.time()
* console.timeEnd()
* 统计一段代码的执行时间
*/