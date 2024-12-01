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
        
        $data = QueryBuilder::for(Event::class)
            ->allowedFilters(['name'])
            ->paginate($filters['per_page'] ?? 30)
            ->appends(request()->query()); 
        

        return Inertia::render('calendar/index', [
            "data" => $data,
            'filters' => $filters
            
        ]);
    } 
    
    public function list(Request $request)
    {
        $filters = $request->query() ?: null;
        //dd($filters);
        
        $data = QueryBuilder::for(Event::class)
            ->allowedFilters(['name'])
            ->paginate($filters['per_page'] ?? 30)
            ->appends(request()->query()); 
        

        return Inertia::render('calendar/list', [
            "data" => $data,
            'filters' => $filters
            
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
