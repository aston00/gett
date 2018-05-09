require('./account.css');

//Account information pannel about user

angular.module('studyApp')
.component('studyAppAccount', {

    template: require('./account.html'),
    bindings: {
        //total data about user
       data: '<'
    },
    controller: function(){

        var ctrl = this;

    }

});

