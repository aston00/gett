class AuthService {
    
    constructor($http){
        this.http = $http;
    }

    /* Fetch user data after login  */
    getUser(accessToken){

        return this.http({
            method: 'POST',
            url: `http://localhost:8080/1/users/me?accesstoken=${accessToken}`
        })
    }
}


//injecting $http service for fetching data about user authentication
angular.module('studyApp').service('AuthService', ['$http', AuthService]);