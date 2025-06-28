<?php

namespace App\Models;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    
    protected $guarded = [];

    public function user() {
        return belongsTo(User::class);
    }
    public function category() {
        return belongsTo(Category::class);
    }
}
