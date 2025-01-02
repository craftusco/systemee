<?php

use App\Http\Controllers\AnalyticsController;
use Illuminate\Support\Facades\Route;

// Auth
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Auth\ForgotPasswordController;

use App\Http\Controllers\ArtistController;
use App\Http\Controllers\CalendarController;
use App\Http\Controllers\ClubController;
use App\Http\Controllers\EventTypeController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InboxController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;

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
    Route::get('/inbox', [InboxController::class, 'index'])->name(name: 'inbox.index');

    // Artists
    Route::prefix('artists')->name('artists')->group(function () {
        Route::get('/', [ArtistController::class, 'index'])->name('index');
        Route::get('/{id}', [ArtistController::class, 'view'])->name('view');
    });
    // Artists
    Route::prefix('clubs')->name('clubs')->group(function () {
        Route::get('/', [ClubController::class, 'index'])->name('index');
        Route::get('/{id}', [ClubController::class, 'view'])->name('view');
    });
    // Calendar
    Route::prefix('calendar')->name('artists')->group(function () {
        Route::get('/', [CalendarController::class, 'page'])->name('index');
        Route::get('/list', [CalendarController::class, 'list'])->name('list');
    });
    // Calendar
    Route::prefix('requests')->name('requests')->group(function () {
        Route::get('/', [RequestController::class, 'index'])->name('index');
        Route::get('/{id}', [RequestController::class, 'view'])->name('view');
    });

     // Analytics
     Route::prefix('analytics')->name('analytics')->group(function () {
        Route::get('/', [AnalyticsController::class, 'index'])->name('index');
    });

    // Settings
    Route::prefix('settings')->name('settings')->group(function () {
        Route::get('/', [SettingsController::class, 'page'])->name('settings.page');
        // Settings Users
        Route::prefix('users')->name('settings')->group(function () {
            Route::get('/', [UserController::class, 'page'])->name('users.index');
            Route::get('/{slug}', [UserController::class, 'view'])->name('users.view');
        });
        // Settings Roles
        Route::prefix('roles')->name('settings')->group(function () {
            Route::get('/', [RoleController::class, 'page'])->name('roles.index');
            Route::get('/create', [RoleController::class, 'create'])->name('roles.create');
            Route::post('/create', [RoleController::class, 'store'])->name('roles.store');
            Route::get('/{id}', [RoleController::class, 'view'])->name('roles.view');
        }); 
        // Event types 
        Route::prefix('event-types')->name('settings')->group(function () {
            Route::get('/', [EventTypeController::class, 'page'])->name('event-types.index');
            Route::post('/create', [EventTypeController::class, 'store'])->name('event-types.store');
            Route::get('/{id}', [EventTypeController::class, 'view'])->name('event-types.view');
        });
    });
});
