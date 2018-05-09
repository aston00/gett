
//DIRECTIVE FOR EXECUTING FUNCTION WHEN NG-REPEAT IS DONE

angular.module('studyApp')
    .directive('afterRepeat', function(){
        return function(scope, element, attrs){
            element.bind('$destroy', function(event){
                if(scope.$last){
                    scope.$eval(attrs.afterRepeat);
                }
            })
        }
    })