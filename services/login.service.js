class LoginService {
    constructor($http){
        this.http = $http;
    }

    login(){
        return this.http({
            method: 'POST',
            url: 'http://localhost:8080/1/users/login',
            data: {
                
                "email":"your email", // the users email
                "password":"you pass" // the users password
            }
        })
    }
}

angular.module('studyApp').service('LoginService', ['$http', LoginService])

