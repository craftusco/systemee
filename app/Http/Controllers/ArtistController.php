<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use Spatie\QueryBuilder\QueryBuilder;

class ArtistController extends Controller
{
    public function index(Request $request)
    {
        $filters = $request->query() ?: null;
        //dd($filters);
        // Build the query with allowed filters
        $products = QueryBuilder::for(Product::with(['supplier']))
            ->allowedFilters(['name', 'sku', 'category', 'supplier.name'])
            ->paginate($filters['per_page'] ?? 30)
            ->appends(request()->query()); // Add the current query params to pagination links


        return Inertia::render('products/index', [
            "data" => $products,
            'filters' => $filters
            // Pass the filters to Inertia so the frontend can initialize them
        ]);
    }


    public function view($id)
    {
        $product = Product::with(['supplier'])->where("id", $id)->first();
        return Inertia::render('products/view', ['data' => $product]);
    }

    public function api(Request $request)
    {
        $filters = $request->query() ?: null;
        $products = QueryBuilder::for(Product::with(['supplier']))
            ->allowedFilters(['name', 'sku', 'category', 'supplier'])
            ->paginate(50)
            ->appends($filters);

        return response()->json([
            "data" => $products,
            'filters' => $filters
        ]);
    }
}
