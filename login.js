// login.js

const correctPassword = "admin123"; // Set the correct password here

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const passwordInput = document.getElementById("password").value;

    if (passwordInput === correctPassword) {
        // Redirect to the home page
        window.location.href = "home.html";
    } else {
        // Show an error message for incorrect password
        document.getElementById("error-message").innerText = "Incorrect password. Please try again.";
    }
});
