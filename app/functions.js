/*jshint laxcomma:true*/
if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function (str1) {
            return str + ', ' + str1;
        };
    },

    makeClosures : function(arr, fn) {
        var result = [];
        
        function createFn (sqrVal) {
            return function () {
                return fn(sqrVal);
            };
        }
        
        for(var i = 0; i < arr.length; i+=1) {
            result.push(createFn(arr[i]));
        }

       return result; 
    },

    partial : function(fn, str1, str2) {
        var args = Array.prototype.slice.apply(arguments);
        return function () {
            var loc_args = args.concat(Array.prototype.slice.apply(arguments));
            
            return loc_args[0](loc_args[1], loc_args[2], loc_args[3]);
        };
    },

    useArguments : function() {
        var args = Array.prototype.slice.apply(arguments)
            , len = args.length
            , result = 0
            , i;

            for (i = 0; i < len; i+= 1 ) {
                result += args[i]; 
            }
            return result;
    },

    callIt : function(fn) {
        fn.apply(this, Array.prototype.slice.call(arguments, 1));
    },

    partialUsingArguments : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function() {
           return fn.apply(null, args.concat(Array.prototype.slice.call(arguments)));
        };
    },

     curryIt : function(fn) {
        var flen = fn.length
            , recur = 0;

        function curryFn(pArgArr) {
            return function (args) {
                var arg = pArgArr.concat(args);
               
                if(arg.length < flen ) {
                    return curryFn(arg);
                } else {
                    return fn.apply(this, arg);
                }
            };
        }
        return curryFn([]);
    }
  };
});

