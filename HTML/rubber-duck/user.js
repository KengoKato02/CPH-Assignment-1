var userForm = document.getElementById("userForm");
var nameInput = document.getElementById("userName");
var emailInput = document.getElementById("userEmail");
var ageInput = document.getElementById("userAge");

var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var ageError = document.getElementById("ageError");

userForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var isValid = true;
    
    nameError.textContent = "";
    emailError.textContent = "";
    ageError.textContent = "";

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    } else if (!/^[a-zA-Z ]+$/.test(nameInput.value.trim())) {
        nameError.textContent = "Name can only contain letters and spaces.";
        isValid = false;
    }

    if (emailInput.value.trim() !== "") {
        var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }
    }

    if (ageInput.value.trim() !== "") {
        if (isNaN(ageInput.value) || ageInput.value < 0) {
            ageError.textContent = "Please enter a valid age.";
            isValid = false;
        }
    }

    if (isValid) {
        var user = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            age: ageInput.value.trim()
        };

        var storedUser = localStorage.getItem("user");
        var existingUser = storedUser ? JSON.parse(storedUser) : null;

        if (existingUser && existingUser.name === user.name && existingUser.email === user.email) {
            localStorage.setItem('firstVisit', false);
        } else {
            localStorage.setItem('firstVisit', true);
        }

        localStorage.setItem("user", JSON.stringify(user));

        window.location.href = "rubberduck.html";
    }
});
