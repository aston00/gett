class RemoveShare{
    constructor($http){
        this.http = $http
    }

    removeShare(shareName, accessToken){
        return this.http({
            method: 'POST',
            url: `http://localhost:8080/1/shares/${shareName}/destroy?accesstoken=${accessToken}`
        })
    }
}

angular.module('studyApp').service('RemoveShare', ['$http', RemoveShare]);