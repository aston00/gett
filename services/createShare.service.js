class CreateShareService {
    constructor($http){
        this.http = $http;
    }

    createShare(sharename){

        return this.http({
            method: 'POST',
            url: `http://localhost:8080/1/shares/create?accesstoken={your access token}`,
            data: {
                "title": `${sharename}` // Optional title of the share
            }
        })
    }
}



angular.module('studyApp').service('CreateShareService', ['$http', CreateShareService]);