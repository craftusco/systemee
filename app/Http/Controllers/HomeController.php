<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use Spatie\QueryBuilder\QueryBuilder;

class HomeController extends Controller
{
    public function index(Request $request)
    {

        return Inertia::render('index', [
            "data" => [],
            'filters' => []
        ]);
    }


}
