//USED WITH ROUTER
require('./filedetails.css');


angular.module('studyApp')
    .component('fileDetails', {
        template: require('./filedetails.html'),
        bindings: {
            share: '<',
            rename: '&',
            remove: '&',
            shareDetails: '<'
        },
        controller: function(){
           
        }
        })