import './bootstrap';

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function() {
    var registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var name = document.getElementById("registrationName").value;
        var email = document.getElementById("registrationEmail").value;
        var password = document.getElementById("registrationPassword").value;

        // Validate the form fields (you can add more robust validation)

        // Send the registration data to the server using Fetch API or XMLHttpRequest
        fetch('register.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'name': name,
                'email': email,
                'password': password
            }),
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            // You can handle the response as needed (e.g., show a success message or redirect)
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    // The rest of your existing JavaScript code
});
