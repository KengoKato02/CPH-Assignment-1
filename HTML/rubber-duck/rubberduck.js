var problemInput = document.getElementById("problemInput");
var sendButton = document.getElementById("sendButton");
var responseMessage = document.getElementById("responseMessage");
var logo = document.getElementById("logo");
var duckMessage = document.getElementById("duckMessage");
var messageList = document.getElementById("messageList");

var messages = [];

var problemSelect = document.getElementById("problemSelect");
var problemList = document.getElementById("problemList");
var selectedProblems = [];

problemSelect.addEventListener("change", function() {
    var selectedProblem = problemSelect.value;

    var existingProblemIndex = selectedProblems.indexOf(selectedProblem);
    if (existingProblemIndex === -1) {
        selectedProblems.push(selectedProblem);
        var li = document.createElement("li");
        li.textContent = selectedProblem;
        li.setAttribute("data-problem", selectedProblem);
        problemList.appendChild(li);

        responseMessage.textContent = `Mr. Duck is pondering your ${selectedProblem}. Quack!`;
    } else {
        selectedProblems.splice(existingProblemIndex, 1);
        var problemToRemove = document.querySelector(`li[data-problem="${selectedProblem}"]`);
        if (problemToRemove) {
            problemList.removeChild(problemToRemove);
        }

        responseMessage.textContent = `Mr. Duck has resolved your ${selectedProblem}. Quack!`;
    }

    problemSelect.selectedIndex = 0;
});

window.addEventListener("load", function() {
    var storedMessages = localStorage.getItem("messages");
    if (storedMessages) {
        messages = JSON.parse(storedMessages);
        displayMessages();
    }
});

sendButton.addEventListener("click", function() {
    var problemText = problemInput.value;

    if (problemText.trim() === "") {
        responseMessage.textContent = "Please describe your problem before sending it to Mr. Duck.";
    } else {
        responseMessage.textContent = "Thank you for sharing your problem with Mr. Duck. Remember, sometimes just talking it out helps!";
        messages.push(problemText);
        localStorage.setItem("messages", JSON.stringify(messages));
        displayMessages();
    }

    problemInput.value = "";
});

function displayMessages() {
    messageList.innerHTML = "";
    messages.forEach(function(message) {
        var li = document.createElement("li");
        li.textContent = message;
        messageList.appendChild(li);
    });
}

logo.addEventListener("mouseover", function() {
    duckMessage.classList.remove("hidden");
    duckMessage.classList.add("visible");
});

logo.addEventListener("mouseout", function() {
    duckMessage.classList.remove("visible");
    duckMessage.classList.add("hidden");
});
