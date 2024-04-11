const url = 'https://api.quotable.io/random'
const submitButton = document.getElementById("submit");

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

    });


var typeChoice = document.getElementById("typeAct")
localStorage.setItem("userChoice", JSON.stringify(document.getElementById("typeAct")));

    submitButton.addEventListener("click", function(event){
        event.preventDefault();
        var userSubmit = {
            "activityType" : typeChoice.value,
        }
    
     });

