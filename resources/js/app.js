import './bootstrap';

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('container');
    const registerToggle = document.getElementById('registerToggle');
    const loginToggle = document.getElementById('loginToggle');
    const registerForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');

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

        // Obtenez les valeurs du formulaire d'inscription
        const name = document.getElementById('registrationName').value;
        const email = document.getElementById('registrationEmail').value;
        const password = document.getElementById('registrationPassword').value;

        // Validez les champs du formulaire d'inscription (ajoutez une logique de validation si nécessaire)

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

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtenez les valeurs du formulaire de connexion
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Envoyez les données de connexion au serveur en utilisant la Fetch API ou XMLHttpRequest
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'email': email,
                'password': password
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Redirigez l'utilisateur vers la page souhaitée après la connexion réussie
                window.location.href = '/dashboard'; // Remplacez '/dashboard' par l'URL de votre choix
            } else {
                // Affichez un message d'erreur au client (par exemple, dans une balise <div>)
                const errorDiv = document.getElementById('loginError');
                errorDiv.innerText = data.message;
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
