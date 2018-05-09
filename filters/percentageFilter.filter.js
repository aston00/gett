angular.module('studyApp')
    .filter('percentageFilter', function(){
        return function(item){
            return (parseInt(item)/2500000).toFixed(2) + '% of 250MB' ;
        }
    })