//FILTERS ARRAY OF SHARES BY PASSED VALUE

angular.module('studyApp')
    .filter('shareNameFilter', function(){
        return function(items, filter) {
            var filtered = [];
            console.log(items);
            if(items){
                for (var i = 0; i < items.length; i++) {

                    //If share item has title
                    if(items[i].title){
                        if(items[i].title.indexOf(filter) != -1){
                            filtered.push(items[i]);
                        }
                    }

                    //If share item doesn't have title - we take it's inner file's name
                    if(!items[i].title){
                        if(items[i].files[0].filename.indexOf(filter) != -1){
                            filtered.push(items[i]);
                        }
                    }
                }
            }
            return filtered;
            

        }
    })
