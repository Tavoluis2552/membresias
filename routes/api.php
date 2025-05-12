<?php

use App\Http\Controllers\Panel\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// show user
Route::get('/users/{user}', [UserController::class, 'show'])->name('api.user.show');

// create user
Route::post('/users', [UserController::class, 'store'])->name('api.user.store');

// delete user
Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('api.user.destroy');


// update user
Route::put('/users/{user}', [UserController::class, 'update'])->name('api.user.update');
