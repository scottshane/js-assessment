if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
        var timerId;
        var iterate = function (){
            if(start <= end) {
                console.log(start++);
                timerId = setTimeout(iterate, 100);  
            }
        };
        iterate();
        return {
            cancel : function() {
                if(timerId) { 
                    clearTimeout(timerId);
                }
            }
        }
    }
  };
});
