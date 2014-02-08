if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
    
  return {
      
    async : function(value) {
       
        var dfd = $.Deferred();
        
        dfd.resolve(value);

        return dfd.promise() 
    },

    manipulateRemoteData : function(url) {
        
        var dfd = $.Deferred()
            , set = []
        $.get(url).done(function (data) {
            var set = [];
            for (var o in data) {
                for (var i=0; i< data[o].length; i+=1){
                    set.push(data[o][i].name);
                }//end for
            }//end for

            dfd.resolve(set.sort());
        
        });//end done
    
        return dfd.promise()
    
    }
  };
});
