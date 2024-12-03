<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\QueryBuilder;

class ArtistController extends Controller
{
    public function index(Request $request)
    {
        $filters = $request->query() ?: [
            'page_size' => $request['page_size'] || 25 
        ];
        //dd($filters);
        
        $products = QueryBuilder::for(Artist::class)
            ->allowedFilters(['name', 'gender'])
            ->paginate((int) $filters['page_size'])
            ->appends(request()->query()); 


        return Inertia::render('artists/index', [
            "data" => $products,
            'filters' => $filters
            
        ]);
    }


    public function view($id)
    {
        $product = Artist::where("id", $id)->first();
        return Inertia::render('artists/view', ['data' => $product]);
    }

}
