<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use App\Http\Middleware\RoleMiddleware;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [HomeController::class, 'home'])->name('home');
Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/content', [HomeController::class, 'content'])->name('content');
Route::get('/blog', [HomeController::class, 'blog'])->name('blog');
Route::get('/blog2', [HomeController::class, 'blogpost'])->name('blog2');
Route::get('/contact', [HomeController::class, 'contact'])->name('contact');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

Route::middleware(['auth', 'verified', 'role:admin,superadmin'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::get('posts', [PostController::class, 'index'])->name('posts');
    Route::get('posts/create', [PostController::class, 'create'])->name('posts.create');
});
Route::middleware(['auth', 'verified', 'role:superadmin'])->group(function () {
    Route::get('admin/users', [TestController::class, 'admin'])->name('admin.users');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
