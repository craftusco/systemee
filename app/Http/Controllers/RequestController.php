<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\QueryBuilder;

class RequestController extends Controller
{
    public function index(Request $request)
    {
        $filters = $request->query() ?: null;
        //dd($filters);
        
        $requests = QueryBuilder::for(Artist::class)
            ->allowedFilters(['name', 'gender'])
            ->paginate((int) $filters['page_size'] ?? 25)
            ->appends(request()->query()); 


        return Inertia::render('requests/index', [
            "data" => $requests,
            'filters' => $filters
            
        ]);
    }


    public function view($id)
    {
        $product = Artist::where("id", $id)->first();
        return Inertia::render('requests/view', ['data' => $product]);
    }

}
