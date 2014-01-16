/*jshint laxcomma:true*/
if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {

        for (var i = 0; i < arr.length; i+=1) {
            if(arr[i] === item) {
                return i;
            }
        }
        return -1;
    },

    sum : function(arr) {
        //ECMA3
        // var total = 0;
        // for (var i = 0; i < arr.length; i++) {
        //    total += parseInt(arr[i], 10);
        // };
        // return total;
        
        //ECMA5
        return arr.reduce(function (p, c, i, a) {
            return (p + c);
        });

    },

    remove : function(arr, item) {
        var len = arr.length
            , i;

        for (i = 0; i < len; i += 1) {
            if( arr[i] === item ) {
                arr.splice(i, 1);
            }
        }
        return arr;
    },

    removeWithoutCopy : function(arr, item) {
          var len   = arr.length
            , begin = null
            , end   = null
            , i;
        
        (arr.sort());
            
        for (i = 0; i <len; i+=1) {
            if(arr[i] === item) {
               if(begin === null) {
                  begin = i;  
               }else {
                end = i;
               }
            }
        }

        arr.splice(begin, end);
        return arr;
    },

    append : function(arr, item) {
       arr.push(item);
       return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var len     = arr.length
            , count = 0
            , i;

        (arr.sort());

        for (i = 0; i < len; i+=1) {
            if(arr[i] === item) {
                count += 1;
            }
        }
        return count;
    },

    duplicates : function(arr) {
        var duplicates = []
            , len = arr.length
            , i;
        
        (arr.sort()); 
        
        for (i = 0; i < len; i += 1) {
            if(arr[i+1] === arr[i] && duplicates.indexOf(arr[i]) === -1) {
                 duplicates.push(arr[i]);
            }
        }
        return duplicates;
    },

    square : function(arr) {
        // ECMA3
        // var len = arr.length
        //     , i = 0;
        //     , result = [];

        // for( i = 0; i < len; i += 1) {
        //     result.push(arr[i] * arr[i])
        // }
        // return result;
    
        //ecma5
        return arr.map(function (e, i, a) {
            return e * e; 
        });

    },

    findAllOccurrences : function(arr, target) {
       /* ECMA3
         var len = arr.length
              , result = []
              , i;

          for (i = 0; i < len; i += 1) {
              if(arr[i] === target) {
                  result.push(i)
              }
          }
        */
        
        //ECMA5
        var result =  [];
        arr.forEach(function (element, index) {
            if(element === target) {
                result.push(index);
            }
        });
        return result;
    }
  };
});
