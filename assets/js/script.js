const url = 'https://api.quotable.io/random'
var submitButton = document.getElementById("formButton");
var pEl = document.getElementById('affirmation')
var pEl2 = document.getElementById('author')

// Fetches the quote API data and adds content to the p containers with the quote and author
fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        pEl.textContent = data.content

        pEl2.textContent = `~${data.author}`
    });

// Creates a listener for the form submit that intakes the user's choice of activity and locally stores it
submitButton.addEventListener("click", function(event){
    event.preventDefault();
    if (document.getElementById("typeAct").value === "") {
        window.location.href = "travel.html";
    } else {
        let userSubmit = document.getElementById("typeAct").value;
        localStorage.setItem("userChoice", JSON.stringify(userSubmit));
        window.location.href = "activity.html";
    }
});