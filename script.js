// Input Fields

let fullName = document.getElementById("fullName");
let username = document.getElementById("username");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let age = document.getElementById("age");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let country = document.getElementById("country");


// Errors

let nameError = document.getElementById("nameError");
let usernameError = document.getElementById("usernameError");
let emailError = document.getElementById("emailError");
let phoneError = document.getElementById("phoneError");
let ageError = document.getElementById("ageError");
let passwordError = document.getElementById("passwordError");
let confirmPasswordError = document.getElementById("confirmPasswordError");
let countryError = document.getElementById("countryError")

let successMessage = document.getElementById("successMessage");

const usernameRegex = /^[a-zA-Z0-9_]+$/;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phoneRegex = /^[0-9]{11}$/;

const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;


// Functionality

function formSubmit() {

    let isValid = true;

    let nameInput = fullName.value;
    let usernameInput = username.value;
    let emailInput = email.value;
    let phoneInput = phone.value;
    let ageInput = Number(age.value);
    let passwordInput = password.value;
    let confirmPasswordInput = confirmPassword.value;
    let countryInput = country.value;


    if (nameInput === "") {
        nameError.textContent = "Full name is required.";
        nameError.style.color = "Red";
        isValid = false;
    } else if (nameInput.length >= 3 &&
        nameInput.length <= 30) {
        nameError.textContent = "Valid Name";
        nameError.style.color = "Green";
    } else {
        nameError.textContent = "Name must be at least 3 characters and Atmost 30 characters.";
        nameError.style.color = "Red";
        isValid = false;
    }


    if (usernameInput === "") {
        usernameError.textContent = "Username is required.";
        usernameError.style.color = "Red";
        isValid = false;
    } else if (usernameInput.length < 4) {
        usernameError.textContent = "Username must be at least 4 characters.";
        usernameError.style.color = "Red";
        isValid = false;
    } else if (usernameInput.length > 15) {
        usernameError.textContent = "Username cannot exceed 15 characters.";
        usernameError.style.color = "Red";
        isValid = false;
    } else if (!(usernameRegex.test(usernameInput))) {
        usernameError.textContent = "Username can only contain letters, numbers and underscore.";
        usernameError.style.color = "Red";
        isValid = false;
    } else {
        usernameError.textContent = "Valid Username";
        usernameError.style.color = "Green";
    }


    if (emailInput === "") {
        emailError.textContent = "Email address is required.";
        emailError.style.color = "Red";
        isValid = false;
    } else if (!(emailRegex.test(emailInput))) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.color = "Red";
        isValid = false;
    } else {
        emailError.textContent = "Valid Email";
        emailError.style.color = "Green";
    }


    if (phoneInput === "") {
        phoneError.textContent = "Phone number is required.";
        phoneError.style.color = "Red";
        isValid = false;
    } else if (phoneInput.length !== 11) {
        phoneError.textContent = "Phone number must contain 11 digits.";
        phoneError.style.color = "Red";
        isValid = false;
    } else if (!(phoneRegex.test(phoneInput))) {
        phoneError.textContent = "Phone number can only contain numbers.";
        phoneError.style.color = "Red";
        isValid = false;
    } else {
        phoneError.textContent = "Valid Phone Number";
        phoneError.style.color = "Green";
    }


    if (ageInput === 0) {
        ageError.textContent = "Age is required.";
        ageError.style.color = "Red";
        isValid = false;
    } else if (ageInput < 18) {
        ageError.textContent = "You must be at least 18 years old.";
        ageError.style.color = "Red";
        isValid = false;
    } else if (ageInput > 60) {
        ageError.textContent = "Age cannot be greater than 60.";
        ageError.style.color = "Red";
        isValid = false;
    } else {
        ageError.textContent = "Valid Age"
        ageError.style.color = "Green";
    }


    if (passwordInput === "") {
        passwordError.textContent = "Password is required.";
        passwordError.style.color = "Red";
        isValid = false;
    } else if (!(passwordRegex.test(passwordInput))) {
        passwordError.textContent = "Password must contain at least 8 characters, one uppercase letter and one number.";
        passwordError.style.color = "Red";
        isValid = false;
    } else {
        passwordError.textContent = "Valid Password";
        passwordError.style.color = "Green";
    }


    if (confirmPasswordInput === "") {
        confirmPasswordError.textContent = "Password is required.";
        confirmPasswordError.style.color = "Red";
        isValid = false;
    } else if (confirmPasswordInput !== passwordInput) {
        confirmPasswordError.textContent = "Password is Not Match";
        confirmPasswordError.style.color = "Red";
        isValid = false;
    } else {
        confirmPasswordError.textContent = "Valid Password"
        confirmPasswordError.style.color = "Green";
    }


    if (countryInput === "") {
        countryError.textContent = "Please Enter a Country";
        countryError.style.color = "Red";
        isValid = false;
    } else {
        countryError.textContent = "Valid Country"
        countryError.style.color = "Green";
    }

    if (isValid === true) {
        successMessage.style.display = "block"
    } else {
        successMessage.style.display = "none"
    }


}
