<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseHelper;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;


class RoleController extends Controller
{


    public function page(Request $request)
    {

        $filters = $request->query();
        $data = QueryBuilder::for(Role::class)
            ->allowedFilters(['name'])
            ->paginate($filters['page_size'] ?? 25)
            ->appends(request()->query());

        return Inertia::render('settings/roles/index', [
            'page' => ResponseHelper::formatResponse($data, $filters)
        ]);
    }

    public function store(Request $request)
    {
        $store = Role::create([
            'name' => $request->name,
        ]);


        return redirect()->route('')->with('success', '
                Role created successfully');
    }

}
