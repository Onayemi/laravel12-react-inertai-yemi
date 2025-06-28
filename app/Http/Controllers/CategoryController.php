<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
        // $posts = Auth::user()->posts()->latest()->get();
        $query = Auth::user()->posts()->latest();
        if($request->has('search') && $request->search !== null) {
            $query->whereAny(['title', 'content'], 'like', '%' . $request->search . '%');
        }
        $posts = $query->paginate(10)->toArray();
        // dd($posts);
        return Inertia::render('posts/index', [
            'posts' => $posts,
        ]);
    }
}
