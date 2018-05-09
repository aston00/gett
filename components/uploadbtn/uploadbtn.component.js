require('./uploadbtn.css');




angular.module('studyApp')
    .component('uploadBtn', {
        template: require('./uploadbtn.html'),
        controller: ['CreateShareService', function(CreateShareService){

            this.createShare = function(){
              let shareName = prompt('Enter value of share item');

                CreateShareService.createShare(shareName).then(function(data){
                    console.log(data);
                })
            }
        }]
    })