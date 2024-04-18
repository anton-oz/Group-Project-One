//Generates an activity based on desired type (i.e. relaxation, social, etc...)
let userSubmit = JSON.parse(localStorage.getItem("userChoice"));
let actURL =`https://www.boredapi.com/api/activity?type=${userSubmit}`;
let weatherURL = "https://wttr.in?format=j1";
const actDiv = document.getElementsByClassName("activityFig");

// Fetches data from the bored API and locally stores a generated activity to call from
fetch (actURL) 
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        localStorage.setItem("activity", data.activity);
        addActFig();
    });

// Function to create a div and locally store the API generated activity
function addActFig() {
    let recommendAct = localStorage.getItem("activity");
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `We recommend you try: ${recommendAct}!`;
    document.getElementById("activityFig").appendChild(newDiv);
}

// Fetches data from the weather API and returns specific data to a modal
fetch (weatherURL) 
    .then(function(response) {
        return response.json();
    })
    .then(function (weather) {
        console.log(weather)
        console.log(weather.current_condition[0].FeelsLikeF);
        // feels like temp set
        const feelsLike = weather.current_condition[0].FeelsLikeF
        localStorage.setItem("feelsLike", feelsLike);
        // actual temp set
        const actualTemp = weather.current_condition[0].temp_F
        localStorage.setItem("actualTemp", actualTemp)
        // humidity set
        const actualHumidity = weather.current_condition[0].humidity
        localStorage.setItem('humidity', actualHumidity)
        // weather description set
        const localWeatherDesc = weather.current_condition[0].weatherDesc[0].value
        localStorage.setItem('weatherDesc', localWeatherDesc)
        console.log(feelsLike);
    });

    // Function to store the user's weather API data based off their IP address (handled by API)
    function addWeatherApi() {
        let localWeather = localStorage.getItem("actualTemp");
        let localHumidity = localStorage.getItem("humidity")
        let localFeelsLike = localStorage.getItem("feelsLike")
        let localWeatherDesc= localStorage.getItem("weatherDesc")
        
        // Outputs message to modal containing weather data
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

// Closes weather modal on click
closeWeatherBtn.addEventListener("click", function(){
    modal.style.display = "none";
});

// Closes on click outside of the modal box
window.addEventListener("click", function(e){
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

