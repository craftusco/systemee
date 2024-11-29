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
        // Build the query with allowed filters
        $products = QueryBuilder::for(Club::class)
            ->allowedFilters(['name', 'gender'])
            ->paginate($filters['per_page'] ?? 30)
            ->appends(request()->query()); // Add the current query params to pagination links


        return Inertia::render('clubs/index', [
            "data" => $products,
            'filters' => $filters
            // Pass the filters to Inertia so the frontend can initialize them
        ]);
    }


    public function view($id)
    {
        $product = Club::where("id", $id)->first();
        return Inertia::render('clubs/view', ['data' => $product]);
    }

}
