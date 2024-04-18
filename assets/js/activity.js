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
    });

    
    function addWeatherApi() {
        let localWeather = localStorage.getItem("actualTemp");
        let localHumidity = localStorage.getItem("humidity")
        let localFeelsLike = localStorage.getItem("feelsLike")
        let localWeatherDesc= localStorage.getItem("weatherDesc")
        
        const weatherDiv = document.createElement("div");
        weatherDiv.innerHTML = `The weather in your area today is: ${localWeatherDesc}<br>
        Temp: ${localWeather}°F<br>
        Feels Like: ${localFeelsLike}°F<br>
        Humidity: ${localHumidity}%<br> `;
        document.getElementById("weatherFig").appendChild(weatherDiv);
    }

    addWeatherApi();


// Modal Element
const modal = document.getElementById('weatherModal');

// Button for Modal pop up
const weatherBtn = document.getElementById('openWeatherModal');

// Close the modal button
const closeWeatherBtn = document.getElementsByClassName("close")[0];

// Opens weather modal on click
weatherBtn.addEventListener("click", function (){
    modal.style.display = "block";
});

closeWeatherBtn.addEventListener("click", function(){
    modal.style.display = "none";
});

window.addEventListener("click", function(e){
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

