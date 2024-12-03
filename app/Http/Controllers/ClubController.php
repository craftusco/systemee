<?php

namespace App\Http\Controllers;

use App\Models\Club;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\QueryBuilder;

class ClubController extends Controller
{
    public function index(Request $request)
    {
        $filters = $request->query() ?: null;
        //dd($filters);
        
        $products = QueryBuilder::for(Club::class)
            ->allowedFilters(['name', 'gender'])
            ->paginate((int) $filters['page_size'] ?? 25)
            ->appends(request()->query()); 


        return Inertia::render('clubs/index', [
            "data" => $products,
            'filters' => $filters
            
        ]);
    }


    public function view($id)
    {
        $product = Club::where("id", $id)->first();
        return Inertia::render('clubs/view', ['data' => $product]);
    }

}
