<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Local extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'address',
        'status',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];
    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }
}
