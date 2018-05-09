class ShareItemService {
    constructor($http){
        this.http = $http;
    }

    getShares(accessToken){
        return this.http({
            method: 'GET',
            url: `http://localhost:8080/1/shares?accesstoken=${accessToken}`
        });


    }
}

angular.module('studyApp').service('ShareItemService', ['$http', ShareItemService]);