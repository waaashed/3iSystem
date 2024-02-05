<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // L'utilisateur est connecté, effectuez ici les actions nécessaires.
            return redirect()->intended('/'); // Redirigez l'utilisateur vers la page souhaitée après la connexion.
        }

        // La tentative de connexion a échoué, redirigez l'utilisateur vers la page de connexion avec un message d'erreur.
        return redirect()->route('login')->with('error', 'Adresse email ou mot de passe incorrect');
    }
}
