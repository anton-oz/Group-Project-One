const url = 'https://api.quotable.io/random'
const submitButton = document.getElementById("submit");

let pEl = document.getElementById('affirmation')


fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        pEl.textContent = data.content
    });


var typeChoice = document.getElementById("typeAct")
localStorage.setItem("userChoice", JSON.stringify(document.getElementById("typeAct")));

    submitButton.addEventListener("click", function(event){
        event.preventDefault();
        var userSubmit = {
            "activityType" : typeChoice.value,
        }
    
     });