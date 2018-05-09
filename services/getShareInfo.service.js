class getShareService {
    constructor($http){
        this.http = $http;
    }

    getShare(sharename){
        return this.http({
            method: 'GET',
            url: `http://localhost:8080/1/shares/${sharename}`
        })
    }
}


angular.module('studyApp').service(['$http', 'getShareService', getShareService]);