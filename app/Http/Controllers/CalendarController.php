<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Event;
use Spatie\QueryBuilder\QueryBuilder;

class CalendarController extends Controller
{
    public function page(Request $request)
    {
        $filters = $request->query() ?: null;
        //dd($filters);
        // Build the query with allowed filters

        return Inertia::render('calendar/index', [
            "data" => null,
            'filters' => null
            // Pass the filters to Inertia so the frontend can initialize them
        ]);
    } 
    
    public function list(Request $request)
    {
        $filters = $request->query() ?: null;
        //dd($filters);
        // Build the query with allowed filters

        return Inertia::render('calendar/list', [
            "data" => null,
            'filters' => null
            // Pass the filters to Inertia so the frontend can initialize them
        ]);
    }


    public function view($id)
    {
        $product = Event::with(['supplier'])->where("id", $id)->first();
        return Inertia::render('products/view', ['data' => $product]);
    }

    public function api(Request $request)
    {
        $filters = $request->query() ?: null;
        $products = QueryBuilder::for(Event::with(['supplier']))
            ->allowedFilters(['name', 'sku', 'category', 'supplier'])
            ->paginate(50)
            ->appends($filters);

        return response()->json([
            "data" => $products,
            'filters' => $filters
        ]);
    }
}
