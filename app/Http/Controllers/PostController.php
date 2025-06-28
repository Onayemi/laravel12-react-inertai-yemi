<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Post;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index(Request $request)
    {
        // $posts = Auth::user()->posts()->latest()->get();
        // $posts = Post::latest()->paginate(5);
        $posts = Post::latest()->paginate(1);
        // $query = Auth::user()->posts()->latest();
        // if($request->has('search') && $request->search !== null) {
        //     $query->whereAny(['title', 'content'], 'like', '%' . $request->search . '%');
        // }
        // $posts = $query->paginate(1)->toArray();
        return Inertia::render('posts/index', [
            'posts' => $posts,
        ]);
    }

    public function create(Request $request) {
        return Inertia::render('posts/create');
    }
    
    public function store(Request $request) {

        // if(!Auth::user()) {
        //     return to_route('login');
        // }

        $validated = $request->validate([
            'title' => 'required|string|max:225',
            'content' => 'required|string|max:1000',
            'status' => 'required',
            'category' => 'required|string|max:225',
            'image' => 'required|image|mimes:jpg,jpeg,png,gif|max:2048',
            // 'image' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
        ]);
        
        $file = $request->file('image');
        $filePath = $file->store('posts', 'public');

        $post = Post::create([
            'user_id' => auth()->user()->id,
            'title' => strip_tags($request->title),
            'category' => $request->category,
            'slug' => Str::slug($request->title),
            'content' => strip_tags($request->content),
            'status' => $request->status,
            'image' => $filePath,
        ]);

        return to_route('posts.index')->with('message', 'Post Created successfully!');
    }

    public function detailArticle($slug) {
        $article = Post::where('slug', $slug)->with(['category', 'user'])->firstOrFail();

        $relatedArticles = Post::where('category_id', $article->category_id)
            ->where('id', '!=', $article->id)
            ->get();

        $comments = Comment::where('post_id', $article->id)->with(['post', 'user'])->get();

        return Inertia::render('Blog/DetailArticle', [
            'article' => $article,
            'relatedArticles' => $relatedArticles,
            'comments' => $comments
        ]);
    }

    public function searchArticle(Request $request){
        $query = $request->input('query');
    }
}
