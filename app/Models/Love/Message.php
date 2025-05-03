<?php

namespace App\Models\Love;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $fillable = ['text', 'type', 'is_read', 'date'];
}
