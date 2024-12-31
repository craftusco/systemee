<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseHelper;
use App\Models\Artist;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\QueryBuilder;

class RequestController extends Controller
{
    public function index(Request $request)
    {
        $filters = $request->query();
        //dd($filters);
        
        $data = QueryBuilder::for(Artist::class)
            ->allowedFilters(['name', 'gender'])
            ->paginate($filters['page_size'] ?? 25)
            ->appends(request()->query()); 


        return Inertia::render('requests/index', [
            'page' => ResponseHelper::formatResponse($data, $filters)
            
        ]);
    }


    public function view($id)
    {
        $product = Artist::where("id", $id)->first();
        return Inertia::render('requests/view', ['data' => $product]);
    }

}
