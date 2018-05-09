require('./header.css');

//Header pannel


angular.module('studyApp')
    .component('studyAppHeader', {
        template: require('./header.html'),
        bindings: {
          user: '<',
            logout: '&',
            login: '&'
        },
        controller:['LoginService',  function (LoginService) {

            this.logggin = function(){
                LoginService.login().then(function(data){
                    console.log(data);
                })
            }

        }]
    });