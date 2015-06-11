function parse(str){
    var cookieObj={};
    if(str){
        var vals=str.split('; ');
        for(var i=0;i<vals.length;i++){
            var kv=vals[i].split('=');
            cookieObj[kv[0]]=decodeURIComponent(kv[1]);
        }
    }
    return cookieObj;
}

/**
 * 把对象转化成发送到客户端的cookie字符串
 * @param cookieObj 对象
 * @param options 选项
 */
function toArray(cookieObj,options){
    var cookieArr=[];//Set-Cookie数组
    if(cookieObj){
        for(var name in cookieObj){//迭代对象每个属性
            var cookieStr=name+'='+encodeURIComponent(cookieObj[name]);
            if(options){
                if(options.path)
                    cookieStr+=";path="+options.path;
                if(options.maxAge){
                    var maxAge=parseInt(options.maxAge);
                    if(isNaN(maxAge)){
                        throw new Error('maxAge must be a number')
                    }else{
                        cookieStr+=";maxAge="+maxAge;
                    }
                }
                if(options.domain){
                    cookieStr+=";domain="+options.domain;
                }
                if(options.expires){
                    if(options.expires instanceof Date){
                        cookieStr+=";expires="+options.expires.toLocaleString();
                    }else{
                        throw new Error('expires must be a Date')
                    }
                }
                if(options.httpOnly){
                    cookieStr+=";httpOnly";
                }
            }
            cookieArr.push(cookieStr)
        }
    }
    return cookieArr
}

exports.parse=parse;
exports.toArray=toArray;