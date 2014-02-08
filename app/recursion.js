if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {

        var fullSet = []
        , subSet = [];

        function typecheck(type, obj) {
            type = (type.toLowerCase()).replace(type.charAt(0), type.charAt(0).toUpperCase())
            return (Object.prototype.toString.call(obj) === '[object '+ type +']');
        }

        function getFiles (obj, parent) {
            var currDir = obj.dir
            //fileSets[currDir] = []
            if(typecheck('array', obj.files)) {
                for (var i=0; i<obj.files.length; i+=1) {
                    if(typeof obj.files[i] === 'string'){
                        fullSet.push(obj.files[i])
                        if(currDir === dirName || parent === 'js') {
                            subSet.push(obj.files[i]);   
                        }
                    } else {
                        if(typeof obj.files[i] === 'object'){  
                            getFiles(obj.files[i], currDir)
                        }
                    }
                }
            }
        }

        getFiles(data)
        return (dirName) ? subSet : fullSet;
    },

    permute: function(arr) {

        var set =[];

        function permutor (arr, data) {
            var cur, memo = data || [];

            for (var i = 0; i < arr.length; i++) {
                cur = arr.splice(i, 1)[0];
                if (arr.length === 0) set.push(memo.concat([cur]));
                permutor(arr.slice(), memo.concat([cur]));
                arr.splice(i, 0, cur);
            }
            return set;
        }

        permutor(arr);
        return set;
    }
  };
});

