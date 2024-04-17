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

// submitButton.addEventListener("click", function(event){
//     event.preventDefault();
//     const usersName = document.getElementById("userName").value;
//     localStorage.setItem("user", JSON.stringify(usersName));
    
//     displayRadioValue();

//     if (document.getElementById("typeAct").value === "") {

//     } else {
//         let userSubmit = document.getElementById("typeAct").value;
//         localStorage.setItem("userChoice", JSON.stringify(userSubmit));
//     }
// });

// const form = document.getElementById('landingPageForm');
// const modal = document.getElementById('myModal');
// const closeModal = document.getElementById('closeModal');
// const modalEl = document.getElementById('modalContent');

// form.addEventListener('submit', function (event) {
//     event.preventDefault();

//     let user = document.getElementById('userName');
//     let userInput = user.value;
//     // let activity = document.getElementById('typeAct');
//     // let activityInput = activity.value;

//     let modalName = document.createElement('p');
//     modalName.textContent = "Hi " + userInput + ", welcome to the shit show." + userSubmit;
//     modalEl.append(modalName);

//     modal.classList.remove('hidden');
// });

// closeModal.addEventListener('click', function () {
//     modalEl.textContent = "";
//     modal.classList.add('hidden');

// });