/**
 * Created by Administrator on 2015/5/20.
 */
console.log(__filename);
function say(msg){
    console.log(msg)
}
var inter=setInterval(say,1000,'leo ning');

setTimeout(function (){
    inter.unref()
},5000)

setTimeout(function(){
    inter.ref()
},15000)