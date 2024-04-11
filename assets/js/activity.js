





//Generates an activity based on desired type (i.e. relaxation, social, etc...)
let actURL =`http://www.boredapi.com/api/activity?type=${userSubmit}`





fetch (actURL) 
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {

        console.log(data);
    });