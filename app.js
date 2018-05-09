var app = angular.module('studyApp', ['ui.router']);

app.config(['$urlRouterProvider', '$stateProvider', ($urlRouterProvider, $stateProvider ) => {
    $urlRouterProvider.otherwise('');

    $stateProvider
        .state({
            name: 'home',
            url: '/',
            template: '<main-folder></main-folder>'
        })
        .state({
            name: 'details',
            url: '/account-details',
            template: '<study-account-details></study-account-details>'
        })
        .state({
            name: 'shareinfo',
            url: '/:sharename',
            template: '<file-details></file-details>',
            // resolve: {
            //     shareDetails: ['$stateParams', 'getShareService', function($stateParams, getShareService){
            //         return getShareService.getShare($stateParams.sharename);
            //     }]
            // }
        })
        
        

}])


require('./services/getShareInfo.service');
require('./directives/afterRepeat.directive');
require('./filters/fileAmountFilter.filter');
require('./filters/dateFilter.filter');
require('./filters/percentageFilter.filter');
require('./filters/sizeFilter.filter');
require('./filters/shareNameFilter.filter');
require('./services/createShare.service');
require('./services/removeShare.service');
require('./services/renameShare.service.js');
require('./services/login.service.js');
require('./services/shares.service.js');
require('./services/data.service');
require('./services/auth.service');
require('./components/search-filter/search-filter.component.js');
require('./components/header/header.component');
require('./components/mainfolder/mainfolder.component');
require('./components/account/account.component');
require('./components/share/share.component');
require('./components/uploadbtn/uploadbtn.component');
require('./components/share-container/share-container.component');
require('./components/account-details/account-details.component');
require('./components/filedetails/filedetails.component');




