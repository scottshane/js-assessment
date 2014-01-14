if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
        return fn.call(obj)
    },

    alterObjects : function(constructor, greeting) {
        return constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
        var result = [];
        for (var o in obj) {
            if(obj.hasOwnProperty(o)) {
                result.push(o+": "+obj[o])
            }
        }
        return result;
    }
  };
});
