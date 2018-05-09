require('./share.css');

angular.module('studyApp')
    .component('appShare', {
        template: require('./share.html'),
        bindings: {
            data: '<',
            removeFile: '&',
            renameFile: '&',
            downloadedFile: '&',
            index: '=',
            showDetails: '&'
            // ,
            // renameShare: '&'
        },
        controller:  function (){
            var ctrl = this;
   
        }
    })