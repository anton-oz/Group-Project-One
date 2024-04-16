//Generates an activity based on desired type (i.e. relaxation, social, etc...)
let userSubmit = JSON.parse(localStorage.getItem("userChoice"));
let actURL =`http://www.boredapi.com/api/activity?type=${userSubmit}`;
let weatherURL = "http://wttr.in?format=j1";
const actDiv = document.getElementsByClassName("activityFig");

fetch (actURL) 
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        localStorage.setItem("activity", data.activity);
        addActFig();
    });

function addActFig() {
    let recommendAct = localStorage.getItem("activity");
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `We recommend you try: ${recommendAct}!`;
    document.getElementById("activityFig").appendChild(newDiv);
}

fetch (weatherURL) 
    .then(function(response) {
        return response.json();
    })
    .then(function (weather) {
        console.log(weather.current_condition[0].FeelsLikeF);
        const feelsLike = weather.current_condition[0].FeelsLikeF
        localStorage.setItem("feelsLike", feelsLike);
        console.log(feelsLike);
        addWeatherApi();
    });

    

    function addWeatherApi() {
        let localWeather = localStorage.getItem("actualTemp");
        let localHumidity = localStorage.getItem("humidity")
        let localFeelsLike = localStorage.getItem("feelsLike")
        let localWeatherDesc= localStorage.getItem("weatherDesc")
        
        const weatherDiv = document.createElement("div");
        weatherDiv.innerHTML = `It is ${localWeatherDesc} today<br>
        Temp: ${localWeather}<br>
        Feels Like: ${localFeelsLike}<br>
        Humidity: ${localHumidity}<br> `;
        document.getElementById("weatherFig").appendChild(weatherDiv);
    }

    // addWeatherApi();


