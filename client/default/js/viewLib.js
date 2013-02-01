/*
1. Load and unload view as required
2. do any thing related to a view.
 */

//create view lib module.
var viewLib=(function(exports){
    //interfaces
    //load page from cache or file system or internet. param etc.
    exports.loadPage=loadPage;

    //change to a page.
    exports.changePage=changePage;

    exports.page=_page;
    //implementation
    var pageCache={};
    /**
     * return specific page jqueyr object.
     * @param  {[type]} pageName [description]
     * @return {[type]}          [description]
     */
    function _page(pageName){
        return $("#"+pageName);
    }
    /**
     * return current displaying page
     * @return {[type]} [description]
     */
    function currentPage(){
        return $(".currentPage");
    }
    /**
     * show a specific page
     * @param  {[type]} pageName [description]
     * @return {[type]}          [description]
     */
    function _showPage(pageName){
        _page(pageName).addClass("currentPage");
    }
    /**
     * hide current page.
     * @return {[type]} [description]
     */
    function _hideCurrentPage(){
        currentPage().removeClass("currentPage");
    }
    /**
     * change current viewing page
     * @param  {[type]} pageName [description]
     * @return {[type]}          [description]
     */
    function changePage(pageName){
        _hideCurrentPage();
        if (_page(pageName).length>0){
            _showPage(pageName);
        }else{
            loadPage(pageName,function(){
                _showPage(pageName);
            }); 
        }
    }
    /**
     * Load a page to DOM
     * @param  {[type]} pageName [description]
     * @return {[type]}          [description]
     */
    function loadPage(pageName,cb){
        _ajaxLoadPage(pageName,function(res){
            $("body").append(res);
            $(document).trigger("pageload_"+pageName);
            if (cb){
                cb();
            }
        });
    }
    /**
     * Load page content using ajax
     */
    function _ajaxLoadPage(pageName,cb){
        if (pageCache[pageName]){
            cb(pageCache[pageName]);
            return;
        }else{
            var pageUrl="./app/view/"+pageName+".html";
            $.get(pageUrl,function(res){
                pageCache[pageName]=res;
                if (cb){
                    cb(res);
                }
            });
        }
        

    }
    return exports;
})(viewLib || {});