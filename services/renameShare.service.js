class RenameShare {
    constructor($http){
        this.http = $http;
    }

    renameShare(sharename, newName, accessToken){
        return this.http({
            method: 'POST',
            url : `http://localhost:8080/1/shares/${sharename}/update?accesstoken=${accessToken}`,
            data : {
                "title" : newName
            }
        })
    }
}

angular.module('studyApp').service('RenameShare', ['$http', RenameShare]);