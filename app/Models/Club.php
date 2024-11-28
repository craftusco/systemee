<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Club extends Model
{
    use HasFactory;
    protected $table = "m_products";
    
    protected $fillable = [ 
        "name",
        "sku",
        "supplier_id",
    ];
    

}
