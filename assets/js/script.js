const url = 'https://api.quotable.io/random'
var submitButton = document.getElementById("formButton");
var pEl = document.getElementById('affirmation')
var pEl2 = document.getElementById('author')

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        pEl.textContent = data.content

        pEl2.textContent = `~${data.author}`
    });

    function displayRadioValue() {
        var inputs = document.getElementsByName('feelingsScale');

        for (i = 0; i < inputs.length; i++) {
            if (inputs[i].checked)
                if (inputs[i].value == "veryBad") {
                    console.log("a");
                } else if (inputs[i].value == "poor"){

                } else if (inputs[i].value == "medium"){

                } else if (inputs[i].value == "good"){

                } else if (inputs[i].value == "excellent"){
                   
                }
        }
    }

// THIS IS WHAT THE BUTTON USED TO DO BEFORE MODAL IDEA
submitButton.addEventListener("click", function(event){
    event.preventDefault();
    // const usersName = document.getElementById("userName").value;
    // localStorage.setItem("user", JSON.stringify(usersName));
    
    // displayRadioValue();

    if (document.getElementById("typeAct").value === "") {
        window.location.href = "travel.html";
    } else {
        let userSubmit = document.getElementById("typeAct").value;
        localStorage.setItem("userChoice", JSON.stringify(userSubmit));
        window.location.href = "activity.html";
    }
});