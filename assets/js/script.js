const url = 'https://api.quotable.io/random'

let pEl = document.getElementById('affirmation')

let pEl2 = document.getElementById('author')


fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        pEl.textContent = data.content
        pEl2.textContent = `~${data.author}`
    });