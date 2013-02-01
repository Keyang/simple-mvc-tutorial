


exports.login=function(param,cb){
    var username=param.username;
    var password=param.password;
    //todo validation;
    cb(null,{"result":true});
}