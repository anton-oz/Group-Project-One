const randomCityButton = document.getElementById('randomBtn');
const cityContentEl = document.getElementById('cityContent');
const cityNameEl = document.getElementById('cityName');
const populationEl = document.getElementById('population');
const searchForm = document.getElementById('searchBar');
const searchQuery = document.getElementById('searchQuery')


randomCityButton.addEventListener('click', tester);

searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (searchQuery.value) {
        searchForCity(searchQuery.value)
        searchQuery.value = '';
    }
    // searchForCity(searchQuery);
})


cityContentEl.style.display = 'none';


let x = false;

function tester(event) {
    event.preventDefault();
    x = true;
    resetter()
}


function resetter() {
    if (x) {
        getRandomCity()
        x = false
    }
}

setDefaultBg();

function searchForCity(search) {
    const url = `https://secure.geonames.org/searchJSON?q=${search.split(' ').join('-')}&maxRows=10&lang=en&username=tonton`

    console.log(url)

    fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        let city = data.geonames[0].name
        let country = data.geonames[0].countryName
        let popNum = data.geonames[0].population
        let popNumFormat = popNum.toLocaleString()
        cityNameEl.textContent = `City: ${city}, ${country}`
        populationEl.textContent = `Population: ${popNumFormat}`
        cityContentEl.style.display = 'flex'

        return backgroundImage(city.split(' ').join(''), country.split(' ').join(''))
    })

}






function getRandomCity() {

    const url = `https://secure.geonames.org/citiesJSON?north=${randomLatitude()}&south=${randomLatitude()}&east=${randomLongitude()}&west=${randomLongitude()}&lang=en&maxRows=50&page=1&username=tonton`;

    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        if(!data.geonames) {
            return console.log('no good :(')
        }
        console.log('ya: ', data.geonames)
        let i = Math.floor(Math.random() * data.geonames.length);
        let city = data.geonames[i].name
        let country = data.geonames[i].countrycode
        let popNum = data.geonames[i].population
        let popNumFormat = popNum.toLocaleString()
        cityNameEl.textContent = `City: ${city}, ${country}`
        populationEl.textContent = `Population: ${popNumFormat}`

        cityContentEl.style.display = 'flex'


        return backgroundImage(city.split(' ').join('-'), country.split(' ').join('-'))
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

    const url = `https://api.unsplash.com/search/photos?query=${city}-${country}&orientation=landscape&page=1&per_page=10`

    console.log(`img url: ${url}`)

    let imgUrl;

    fetch(url, {
        headers: {
            'Authorization': `Client-ID ${apiKey}`
        }
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        let i = Math.floor(Math.random() * data.results.length);
        imgUrl = data.results[i].urls.raw
        return imgUrl
    })
    .then(function (data2) {
        setBackground(data2)  
    })
    //return backgroundImgUrl
}


// function to consolidate fetch request

function setBackground(url) {
    let bodyEl = document.getElementById('body');
    bodyEl.style.backgroundImage = `url(${url})`
    bodyEl.style.backgroundSize = 'cover'
}

// Sets the background when page loads

function setDefaultBg() {
    const defaultBg = [
        'https://images.unsplash.com/photo-1548574505-5e239809ee19?ixid=M3w1OTA4OTZ8MHwxfHNlYXJjaHwxfHxiYWhhbWFzfGVufDB8MHx8fDE3MTMyMzIyMTh8MA&ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=M3w1OTA4OTZ8MHwxfHNlYXJjaHwyfHxtb3VudGFpbnN8ZW58MHwwfHx8MTcxMzIzMjM4OXww&ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixid=M3w1OTA4OTZ8MHwxfHNlYXJjaHwyfHxtYXNzaXZlJTJDY2l0eXxlbnwwfDB8fHwxNzEzMjMyNjM2fDA&ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1442120108414-42e7ea50d0b5?ixid=M3w1OTA4OTZ8MHwxfHNlYXJjaHw2fHxqdW5nbGV8ZW58MHwwfHx8MTcxMzIzMjY3Nnww&ixlib=rb-4.0.3'
    ];

    document.body.style.backgroundImage = `url(${randomIndex()})`;
    document.body.style.backgroundSize = 'cover';

    function randomIndex() {
        const randomIndex = Math.floor(Math.random() * defaultBg.length);
        return defaultBg[randomIndex];
    };
};