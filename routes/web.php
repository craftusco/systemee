<?php


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Auth
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Auth\ForgotPasswordController;

use App\Http\Controllers\ArtistController;
use App\Http\Controllers\HomeController;


// Auth
Route::middleware('guest')->group(function () {
    Route::post('/logout', [LoginController::class, 'logout']);
    Route::get('/login', [LoginController::class, 'page'])->name('login');
    Route::post('/login', [LoginController::class, 'login']);
    Route::get('/forgot-password', [ForgotPasswordController::class, 'create'])->name('forgot-password');
    Route::post('/forgot-password', [ForgotPasswordController::class, 'store']);
    Route::get('/reset-password/{token}', [ResetPasswordController::class, 'create'])->name('password.reset');
    Route::post('/reset-password', [ResetPasswordController::class, 'store'])->name('password.store');
});

// User
Route::middleware(['auth'])->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name(name: 'index');

    // Artists
    Route::prefix('artists')->name('artists')->group(function () {
        Route::get('/', [ArtistController::class, 'index'])->name('index');
        Route::get('/{slug}', [ArtistController::class, 'view'])->name('view');
    });
});
