var problemInput = document.getElementById("problemInput");
var sendButton = document.getElementById("sendButton");
var responseMessage = document.getElementById("responseMessage");
var logo = document.getElementById("logo");
var duckMessage = document.getElementById("duckMessage");

sendButton.addEventListener("click", function() {
    var problemText = problemInput.value;

    if (problemText.trim() === "") {
        responseMessage.textContent = "Please describe your problem before sending it to Mr. Duck.";
    } 
    responseMessage.textContent = "Thank you for sharing your problem with Mr. Duck. Remember, sometimes just talking it out helps!";
    

    problemInput.value = "";
});

logo.addEventListener("mouseover", function() {
    duckMessage.classList.remove("hidden");
    duckMessage.classList.add("visible");
});

logo.addEventListener("mouseout", function() {
    duckMessage.classList.remove("visible");
    duckMessage.classList.add("hidden");
});
