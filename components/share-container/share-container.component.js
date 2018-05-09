require('./share-container.css');
require('../share/share.component');
/* Grid items - single files */

angular.module('studyApp')
    .component('fileGrid', {
        template: require('./share-container.html'),
        bindings: {
            //array with all the files
           fileList: '<',
            //test string
            greeting: '<',
            //test function with two way binding
            getName: '<',
            removeFile: '&',
            renameFile: '&',
            downloadedFile: '<',
            renameFile: '&',
            filter: '=',
            getFilteredLength: '&',
            onDetailsClick: '&'
        },
        controller: function(){
            var ctrl = this;

}
    })