<!DOCTYPE html>
<html lang="fr">

@vite(['resources/css/app.css', 'resources/js/app.js'])

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Se connecter à FishGuard</title>
    <link rel="icon" href="fishg.png">
    <!-- Autres métadonnées et liens -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <!-- Inclure custom.css si nécessaire -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <script src="{{ asset('js/app.js') }}"></script>
    <!-- Inclure custom.js si nécessaire -->
    <script src="{{ asset('js/app.js') }}"></script>

    <div class="container" id="container">
        <div class="form-container sign-up">
            <form id="registrationForm">
                <h1>Créer un Compte</h1>
                <span>utilisez votre email pour l'inscription</span>
                <input type="text" placeholder="Nom" id="registrationName">
                <input type="email" placeholder="Email" id="registrationEmail">
                <input type="password" placeholder="Mot de passe" id="registrationPassword">
                <button type="submit" id="registerSubmit">S'inscrire</button>
            </form>
        </div>
        <div class="form-container sign-in">
            <form id="loginForm">
                <h1>Se Connecter</h1>
                <span>utilisez votre email et mot de passe</span>
                <input type="email" placeholder="Email" id="loginEmail">
                <input type="password" placeholder="Mot de passe" id="loginPassword">
                <a href="#">Mot de passe oublié ?</a>
                <button type="submit">Se Connecter</button>
            </form>
        </div>
        <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-left">
                    <h1>Rebonjour !</h1>
                    <p>Entrez vos détails personnels pour utiliser toutes les fonctionnalités du site</p>
                    <button class="hidden" id="loginToggle">Se Connecter</button>
                </div>
                <div class="toggle-panel toggle-right">
                    <h1>Bonjour, l'Ami !</h1>
                    <p>Inscrivez-vous avec vos détails personnels pour utiliser toutes les fonctionnalités du site</p>
<<<<<<< HEAD
                    <button class="hidden" id="register">S'inscrire</button>
=======
                    <button class="hidden" id="registerToggle">S'inscrire</button>
>>>>>>> ad5c48824abefa8d46110ac7e2a01d7758e80a90
                </div>
            </div>
        </div>
    </div>
</body>

</html>
