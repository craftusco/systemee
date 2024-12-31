<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseHelper;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\QueryBuilder;

class UserController extends Controller
{
    public function page(Request $request)
    {

        $filters = $request->query();
        
        $data = QueryBuilder::for(User::class)
            ->allowedFilters(['name'])
            ->paginate($filters['page_size'] ?? 25)
            ->appends(request()->query());

        return Inertia::render('settings/users/index', [
            'page' => ResponseHelper::formatResponse($data, $filters)
        ]);
    }


}
