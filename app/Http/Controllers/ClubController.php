<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseHelper;
use App\Models\Club;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\QueryBuilder;

class ClubController extends Controller
{
    public function index(Request $request)
    {
        $filters = $request->query();
        //dd($filters);

        $data = QueryBuilder::for(Club::class)
            ->allowedFilters(['name', 'gender'])
            ->paginate($filters['page_size'] ?? 25)
            ->appends(request()->query());


        return Inertia::render('clubs/index', [
            'page' => ResponseHelper::formatResponse($data, $filters)
        ]);
    }


    public function view($id)
    {
        $product = Club::where("id", $id)->first();
        return Inertia::render('clubs/view', ['data' => $product]);
    }

}
