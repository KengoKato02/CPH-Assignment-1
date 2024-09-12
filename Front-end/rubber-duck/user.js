var userForm = document.getElementById("userForm");
var nameInput = document.getElementById("userName");
var emailInput = document.getElementById("userEmail");
var ageInput = document.getElementById("userAge");

var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var ageError = document.getElementById("ageError");

function isValidCphBusinessEmail(email) {
    const trimmedEmail = email.trim().toLowerCase();
    return trimmedEmail.endsWith("@cphbusiness.dk") && trimmedEmail.indexOf("@") === trimmedEmail.lastIndexOf("@");
}

function isProfane(text) {
    const profaneWords = ['badword1', 'badword2', 'badword3']; 
    return profaneWords.some(word => text.toLowerCase().includes(word));
}

nameInput.addEventListener('input', function() {
    if (isProfane(this.value)) {
        this.value = this.value.replace(/\S/g, '*');
        nameError.textContent = "Please use appropriate language.";
    } else {
        nameError.textContent = "";
    }
});

emailInput.addEventListener('input', function() {
    if (isProfane(this.value)) {
        this.value = this.value.replace(/\S/g, '*');
        emailError.textContent = "Please use appropriate language.";
    } else {
        emailError.textContent = "";
    }
});

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
    } else if (isProfane(nameInput.value)) {
        nameError.textContent = "Please use appropriate language.";
        isValid = false;
    }

    if (emailInput.value.trim() !== "") {
        if (!isValidCphBusinessEmail(emailInput.value)) {
            emailError.textContent = "Please enter a valid @cphbusiness.dk email address.";
            isValid = false;
        } else if (isProfane(emailInput.value)) {
            emailError.textContent = "Please use appropriate language.";
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
