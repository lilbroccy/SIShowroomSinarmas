<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CarUnitController;
use App\Http\Controllers\HomeController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/index', function () {
    return view('index');
})->name('index');

Route::get('/tes', function () {
    return view('indextanpayield');
});

// View
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/categories/index', [CategoryController::class, 'index'])->name('categories.index');
Route::get('/carunits/index', [CarUnitController::class, 'index'])->name('carunit.index');
