<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function home() {
        return Inertia::render('welcome');
    }
    public function about() {
        return Inertia::render('about');
    }
    public function content() {
        return Inertia::render('content');
    }
    public function blog() {
        return Inertia::render('blogs');
    }
    public function blogpost() {
        return Inertia::render('blog-details');
    }
    public function contact() {
        return Inertia::render('contact');
    }
}
