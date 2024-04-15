let randomCityButton = document.getElementById('randomBtn')


randomCityButton.addEventListener('click', tester)


let x = false;

function tester(event) {
    event.preventDefault();
    x = true;
    resetter()
}


function resetter() {
    if (x) {
        getRandomCity()
        console.log(backgroundImgUrl)
        x = false
    }
}

let backgroundImgUrl;

function getRandomCity() {

    const url = `http://api.geonames.org/citiesJSON?north=${randomLatitude()}&south=${randomLatitude()}&east=${randomLongitude()}&west=${randomLongitude()}&lang=en&maxRows=20&username=tonton`;

    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log('ya: ', data.geonames)
        let i = Math.floor(Math.random() * 20);
        let city = data.geonames[i].name
        let country = data.geonames[i].countrycode
        console.log(`${city}, ${country}`)
        return backgroundImage(city, country)
    })
    
    

    // North + South Values

    function randomLatitude() {
        let randomNum = Math.random() * (90 - (-90)) + (-90);

        let rounded = randomNum.toFixed(1);

        return rounded;
    }

    // East + West Values
    function randomLongitude() {
        let randomNum = Math.random() * (180 - (-180)) + (-180);

        let rounded = randomNum.toFixed(1);

        return rounded;
    }
}


function backgroundImage(city, country) {
    const apiKey = '7neOXH1FCj_WvQfXsBI7Sc0ZVdO7jxDeRLW9Z2wODfc';

    const url = `https://api.unsplash.com/search/photos?query=${city},${country}&orientation=landscape&page=1&per_page=10`

    console.log(`img url: ${url}`)

    let imgUrl;

    fetch(url, {
        headers:{
            'Authorization': `Client-ID ${apiKey}`
        }
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        imgUrl = data.results[0].urls.raw
        return imgUrl
    })
    .then(function (data2) {
        setBackground(data2)  
    })
    //return backgroundImgUrl
}

function setBackground(url) {
    let bodyEl = document.getElementById('body');
    bodyEl.style.backgroundImage = `url(${url})`
    bodyEl.style.backgroundSize = 'cover'
}