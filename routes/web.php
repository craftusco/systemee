<?php

use App\Http\Controllers\ArtistController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\XDController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Auth\AuthController;


Route::get('/', [HomeController::class, 'index'])->name(name: 'index');


Route::prefix('auth')->name('products')->group(function () {
    Route::get('/login', [AuthController::class, 'login'])->name('login');
    Route::get('/{slug}', [AuthController::class, 'forgotPassword'])->name('forgotPassword');
});

Route::prefix('products')->name('products')->group(function () {
    Route::get('/', [ArtistController::class, 'index'])->name('index');
    Route::get('/{slug}', [ArtistController::class, 'view'])->name('view');
});
