<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ApiEventType;


Route::middleware('guest')->group(function () {
    Route::post('/event-types', [ApiEventType::class, 'index'])->name('api.event-types');
});