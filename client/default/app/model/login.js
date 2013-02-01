var loginModel=(function(exports){
    exports.login=login;

    function login(username,password, cb){
        modelLib.fhact({
            act:"login",
            req:{username:username,password:password}
        },function(res){
            console.log(res);
            if (cb){
                cb(res);
            }
        });
    }

    return exports;
})(loginModel || {});