<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    use HasFactory;
    
    protected $table = "m_suppliers";
    
    protected $fillable = [ 
        "name",
        "website",
    ];

    protected $casts = [
        "products" => "array"
    ];

    protected $appends = ['total_products'];

    public function getTotalProductsAttribute()
    {
        return $this->products()->count() ?? 0;
    }
}
