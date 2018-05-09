angular.module('myApp')
    .component('main', {
        template: `<div ng-show="!$ctrl.chosen" ng-click="$ctrl.details($index)" class="User" ng-repeat="x in $ctrl.users"><h3>{{x.username}}</h3>
    <h3>{{x.email}}</h3>
    </div>
<div ng-show="$ctrl.chosen">
    <h1>{{$ctrl.userPost.userId}}</h1>
</div>`
        ,
        controller: function mainCtrl($http){
            var self = this;
            this.$onInit = function(){
                $http.get('https://jsonplaceholder.typicode.com/users')
                    .then(function(result){
                        self.users = result.data;
                    });
            }

            this.remove = function(index) {
                this.users.splice(index, 1);
            }

            this.details = function(post){
                $http.get('https://jsonplaceholder.typicode.com/posts/' + post )
                    .then(function(data){
                        console.log(post);
                        self.userPost = data.data;
                        self.chosen = true;
                    });

            }



        }
    })