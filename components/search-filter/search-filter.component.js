require('./search-filter.css');

angular.module('studyApp')
    .component('searchFilter', {
        template: require('./search-filter.template.html'),
        bindings: {
            filter: '=',
            filteredLength: '<',
            onInputClear: '&'
        },
        controller: function(){

            



            // this.onFilterChanges = function(){
            //     return
            // }
        }
    })