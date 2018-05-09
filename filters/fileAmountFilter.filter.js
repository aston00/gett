angular.module('studyApp')
    .filter('fileAmountFilter', function(){
        return function(item){
            if(item == 1) {
                return `${item} file`;
            }
            if(item > 1) {
                return `${item} files`;
            }
        }
    })