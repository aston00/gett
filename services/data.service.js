class DataService {

    //inserting dependency into constructor
    constructor($q){
        this.q = $q;
    }

    /* Function for receiving data */
    getShares() {

        //$q allows us to pass "angular promise" - so we dont need to write $scope.$apply
    return this.q(function(resolve,reject){
        resolve([
            {name: 'Dummy 2', dateCreated: new Date(), innerFiles: 3, fileSize: 560.0, downloadedTimes: 2},
            {name: 'Dummy 3', dateCreated: new Date(), innerFiles: 8, fileSize: 17.0, downloadedTimes: 3},
            {name: 'Dummy 4', dateCreated: new Date(), innerFiles: 1, fileSize: 9.0, downloadedTimes: 1}
        ])
    })


    }
}


//injecting dependencies in square brackets. $q => dependency aka angular-Promise
angular.module('studyApp').service('SharesService', ['$q', DataService]);