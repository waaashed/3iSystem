import './bootstrap';

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const registerForm = document.getElementById('registrationForm');
    const registerName = document.getElementById('registrationName');
    const registerEmail = document.getElementById('registrationEmail');
    const registerPassword = document.getElementById('registrationPassword');
    const registerSubmit = document.getElementById('registerSubmit');
    const registerToggle = document.getElementById('registerToggle');
    const loginToggle = document.getElementById('loginToggle');

    function togglePanel(panel) {
        if (panel === 'login') {
            container.classList.remove("active");
            loginToggle.classList.add('hidden');
            registerToggle.classList.remove('hidden');
        } else if (panel === 'register') {
            container.classList.add("active");
            loginToggle.classList.remove('hidden');
            registerToggle.classList.add('hidden');
        }
    }

    registerToggle.addEventListener('click', () => {
        togglePanel('register');
    });

    loginToggle.addEventListener('click', () => {
        togglePanel('login');
    });

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtenez les valeurs du formulaire
        const name = registerName.value;
        const email = registerEmail.value;
        const password = registerPassword.value;

        // Validez les champs du formulaire (ajoutez une logique de validation si nécessaire)

        // Envoyez les données d'inscription au serveur en utilisant la Fetch API ou XMLHttpRequest
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

            // Si l'inscription est réussie, basculez vers la page de connexion
            if (data === 'success') {
                togglePanel('login');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
