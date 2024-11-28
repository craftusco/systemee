<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class LoginController extends Controller
{

    public function page(): Response
    {
        return Inertia::render('auth/login');
    }

    public function login(LoginRequest $request): RedirectResponse
    {
        // Validating the request and attempting to authenticate
        if (Auth::attempt($request->validated())) {
            $request->session()->regenerate();

            return redirect('/');
        }

        // If authentication fails, log an error and redirect back with an error message
        Log::error('Login failed. Invalid credentials provided.');

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);

    }


    /**
     * Destroy an authenticated session.
     */
    public function logout(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
