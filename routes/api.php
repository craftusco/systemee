<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Makito\ProductController as MakitoProductController;
use App\Http\Controllers\Makito\CategoryController as MakitoCategoryController;
use App\Http\Controllers\Midocean\ProductController as MidoceanProductController;
use App\Http\Controllers\PF\ProductController as PFProductController;
use App\Http\Controllers\PF\CategoryController as PFCategoryController;
use App\Http\Controllers\Xd\ProductController as XdProductController;
use App\Http\Controllers\Xd\PriceController as XdPriceController;

Route::prefix('makito')->name('makito.')->group(function () {
    Route::get('/download', [MakitoProductController::class, 'download'])->name('download');
    Route::get('/products', [MakitoProductController::class, 'products'])->name('products.index');
    Route::get('/products/{id}', [MakitoProductController::class, 'show'])->name('products.show');
    Route::get('/categories', [MakitoProductController::class, 'products'])->name('categories.index');
    Route::get('/upsert', [MakitoProductController::class, 'upsert'])->name('upsert');
});

Route::prefix('midocean')->name('midocean.')->group(function () {
    Route::get('/products', [MidoceanProductController::class, 'index'])->name('products.index');
    Route::get('/prices', [MidoceanProductController::class, 'index'])->name('prices.index');
});

Route::prefix('pf')->name('pf.')->group(function () {
    Route::get('/products', [PFProductController::class, 'index'])->name('products.index');
    Route::get('/products/{id}', [PFProductController::class, 'show'])->name('products.show');
    Route::get('/categories', [PFCategoryController::class, 'index'])->name('categories.index');
    Route::get('/categories/{id}', [PFCategoryController::class, 'show'])->name('categories.show');
});

Route::prefix('xd')->name('xd.')->group(function () {
    Route::get('/products', [XdProductController::class, 'index'])->name('products.index');
    Route::get('/products/{id}', [XdProductController::class, 'show'])->name('products.show');
    Route::get('/prices', [XdPriceController::class, 'index'])->name('prices.index');
});


Route::prefix('')->name('api.')->group(function () {
    Route::get('/products', [ProductController::class, 'api'])->name('products.api');
    Route::get('/products/{id}', [PFProductController::class, 'view'])->name('products.view');
});