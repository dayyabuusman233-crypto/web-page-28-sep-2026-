const form = document.getElementById("registrationForm");

const phone = document.getElementById("phone");
const email = document.getElementById("email");
const password = document.getElementById("password");

const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(event) {

    
    event.preventDefault();

    
    phoneError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    phone.classList.remove("error", "success");
    email.classList.remove("error", "success");
    password.classList.remove("error", "success");

    let isValid = true;

    

    const phonePattern = /^[0-9]{10,15}$/;

    if (phone.value.trim() === "") {

        phoneError.textContent = "Phone number is required.";
        phone.classList.add("error");

        isValid = false;

    } else if (!phonePattern.test(phone.value.trim())) {

        phoneError.textContent =
            "Enter a valid phone number (10-15 digits).";

        phone.classList.add("error");

        isValid = false;

    } else {

        phone.classList.add("success");
    }


    

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {

        emailError.textContent = "Email is required.";
        email.classList.add("error");

        isValid = false;

    } else if (!emailPattern.test(email.value.trim())) {

        emailError.textContent =
            "Enter a valid email address.";

        email.classList.add("error");

        isValid = false;

    } else {

        email.classList.add("success");
    }


    

    if (password.value === "") {

        passwordError.textContent =
            "Password is required.";

        password.classList.add("error");

        isValid = false;

    } else if (password.value.length < 8) {

        passwordError.textContent =
            "Password must contain at least 8 characters.";

        password.classList.add("error");

        isValid = false;

    } else {

        password.classList.add("success");
    }


    

    if (isValid) {

        successMessage.textContent =
            "Registration successful!";

        
        form.reset();

        phone.classList.remove("success");
        email.classList.remove("success");
        password.classList.remove("success");
    }

});