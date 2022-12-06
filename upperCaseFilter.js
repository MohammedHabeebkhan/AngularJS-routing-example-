
  /// <reference path="script.js" />

app.filter("myFormat", function(){
    return function(x){
       if( x !== null && x !== undefined ){
        var up =  x.toUpperCase();
        return up
       } 
      
    }
})





    // app.filter('filterNameHere', function () { return function () {
    //     return ;
    //     } ;
    //     } ) ;