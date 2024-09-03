var myValue = "Hello, World!";
document.getElementById("output").innerHTML = myValue;

var hoverButton = document.getElementById("hoverButton");
var hiddenMessage = document.getElementById("hiddenMessage");

hoverButton.addEventListener("mouseover", function() {
    hiddenMessage.classList.remove("hidden");
    hiddenMessage.classList.add("visible");
});

hoverButton.addEventListener("mouseout", function() {
    hiddenMessage.classList.remove("visible");
    hiddenMessage.classList.add("hidden");
});