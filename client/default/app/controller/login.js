

var loginController=(function(exports){
    //interfaces
    exports.login=login;

    //delegates
    $(document).bind("pageload_loginPage",_pageLoaded);
    //document.addEventListener("ready",_AppLoaded);

    //implementations
    function _pageLoaded(){
        _page().find("#login_submit").bind("click",_onSubmit);
    }
    //return page json object;
    function _page(elem){
        return viewLib.page("loginPage");
    }
    function login(userName,password){
        loginModel.login(userName,password,function(){
            //todo change to profile page if succeed.
        }); 
    }
    function _getUserProfile(){

    }
    function _onSubmit(e){
        var userName=_page().find("#login_userName").val();
        var password=_page().find("#login_password").val();
        login(userName,password);
    }


    return exports;
})(loginController || {});
