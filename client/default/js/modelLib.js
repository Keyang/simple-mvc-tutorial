

var modelLib=(function(exports){
    exports.fhact=fhact;//cloud call
   // exports.fhdata=fhdata; //local stroage

    function fhact(){
        $fh.act.apply($fh,arguments);
    }

    return exports;
})(modelLib ||{});