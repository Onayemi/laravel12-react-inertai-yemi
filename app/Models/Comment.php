<?php

namespace App\Models;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $guarded = [];

    public function user() {
        return belongsTo(User::class);
    }
    public function post() {
        return belongsTo(Post::class);
    }
}
