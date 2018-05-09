angular.module('studyApp')
    .filter('sizeFilter', function(){
        return function(item){
        
            let parsed = parseInt(item);
            let formattedValue;
            if(parsed < 1000000){
                formattedValue = item + ' KB';
            }
            if(parsed > 1000000){
                formattedValue = (parsed / 1000000).toFixed(2) + ' MB'; 
            }
            return formattedValue;
        }
    })