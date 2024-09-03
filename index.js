var hoverButton = document.getElementById("hoverButton");
var hiddenMessage = document.getElementById("hiddenMessage");
var getClick = document.getElementById("getClick");

hoverButton.addEventListener("mouseover", function() {
 hiddenMessage.classList.remove("hidden");
 hiddenMessage.classList.add("visible");
});

hoverButton.addEventListener("mouseout", function() {
 hiddenMessage.classList.remove("visible");
 hiddenMessage.classList.add("hidden");
});

getClick.addEventListener("click", function() {
 alert("You clicked the button!");
});