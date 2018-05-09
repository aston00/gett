require('./mainfolder.css');

/* Main container wrapper of all share-related data */
angular.module('studyApp')
    .component('mainFolder', {
        template: require('./mainfolder.html'),
        bindings: {
            items: '='
        },
        //here injection of services: to get Data with share items and get data about user
        controller: ['RemoveShare', 'RenameShare', 'ShareItemService', 'AuthService', 'LoginService', 'SharesService', function (RemoveShare, RenameShare, ShareItemService, AuthService, LoginService, SharesService) {



            var ctrl = this;
            this.filter = '';
            this.accessToken = '';
            this.shareDetails = '';

            //ACCOUNT DATA - NOT TO SHOW ON INITIALISATION!!!
            this.data = {
                plan: '',
                expDate: 'never',
                fileQuantity: 0,
                spaceTaken: 0,
                downloaded: 0,
                percentage: 0.00,
            }

            //Empty filter input 
            this.onInputClear = function(){
                ctrl.filter = '';
            }
          


            //For filtering the array of share-items
            this.onFilterChange = function(filter){


                ctrl.filterValue = filter;
                console.log('Length' + ctrl.filesArray);
            }

            //Function for renaming share item WORKS
            this.renameShare = function(oldName){
                var newName = prompt('Enter new value of the following share item please');

                RenameShare.renameShare(oldName, newName, ctrl.accessToken).then(function(data){
                   
                    ctrl.filesArray.forEach((item, index) => {
                        if(item.id == data.data.id){
                            ctrl.filesArray[index].title = data.data.title;
                        }
                    })

                   
                })
            }



            //LOGGING USER
            this.login = function(){
                //DATA ABOUT USER AUTHENTICATED
                LoginService.login().then(function(data){
                    ctrl.accessToken = data.data.accesstoken;
                    console.log(data.data.accesstoken);
                    
                    ctrl.userName = data.data.user.fullname;
                    ctrl.userInfo = data.data.user;

                    //CAPITALISING ACCOUNT TYPE  STRING
                    var plan = String(data.data.user.type);
                    ctrl.data.plan = plan.charAt(0).toUpperCase() + plan.slice(1);


                    //RECEIVING DATA ABOUT ALL SHARES
                    ShareItemService.getShares(ctrl.accessToken).then(function (items) {

                        console.log(items);
                        ctrl.filesArray = items.data;
                        return items.data;

                    }).then(function(share) {



                        //PASSING AMOUNT OF DOWNLOADS INTO ACCOUNT INFORMATION
                        var downloadAmount = 0;
                        share.forEach(function(item) {
                            downloadAmount += item.downloads;
                        })
                        ctrl.data.downloaded = downloadAmount;


                        //PASSING TOTAL SIZE OF ALL FILES INTO ACCOUNT INFORMATION
                        var totalSize = 0;
                        share.forEach(function (item) {
                            totalSize += item.sizeCache;

                        })
                        ctrl.data.spaceTaken = totalSize;

                        //PASSING TOTAL AMOUNT OF FILES INTO ACCOUNT INFORMATION
                        var totalFiles = 0;
                        share.forEach(function (item) {
                            totalFiles += item.fileseed;

                        })
                        ctrl.data.fileQuantity = totalFiles;

                        //PASSING PERCENTAGE INTO ACCOUNT INFORMATION
                        // ctrl.data.percentage = (totalSize/2500000).toFixed(2);
                        ctrl.data.percentage = totalSize;
                    });
                })


            }


            //For details to the details about share component
            this.shareInformation = function(share){
                ctrl.shareDetails = share;
                console.log(share);
            }



            //LOGGING OUT USER
            this.logout = function(){
                ctrl.userInfo = '';
                ctrl.shareDetails = '';
            }

            //REMOVING ITEM FROM THE SERVER
            this.removeItem = function(item){



                //REMOVING SHARE ITEM FROM THE SERVER
                RemoveShare.removeShare(item.sharename, ctrl.accessToken).then(function(data){

                    //Updating file quantity in ACCOUNT INFO
                    ctrl.data.fileQuantity -= item.fileseed;

                    //updating space taken in ACCOUNT INFO
                    ctrl.data.spaceTaken -= item.sizeCache;

                    //updating percentage in ACCOUNT INFO
                    // ctrl.data.percentage = (ctrl.data.spaceTaken / 2500000).toFixed(2);

                    ctrl.data.percentage = ctrl.data.spaceTaken;

                    //TODO::  HERE FIX NEEDED
                }).then(function(data){

                    //RECEIVING UPDATED LIST OF SHARES FROM SERVER TODO:: Shouldn't send second request
                    ShareItemService.getShares(ctrl.accessToken).then(function (items) {

                        ctrl.filesArray = items.data;

                    })
                })
            }


            //INCREASE THE DOWNLOADS AMOUNT BY ONE
            this.downloadedItem = function () {
               
                ctrl.data.downloaded++;
            }

        }]
    })