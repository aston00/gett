angular.module('studyApp')
    .filter('dateFilter', () => {
        return (data) => {
            if(data){
                
                let originDate = new Date(data*1000);
                let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
                let dayIndex = originDate.getDay();
                let day = days[dayIndex];
                let date = originDate.getDate();
                let months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                let monthIndex = originDate.getMonth();
                let month = months[monthIndex];
                let year = originDate.getFullYear();
                return `${day} ${month} ${date}, ${year}`;
            }
            
        }
    })