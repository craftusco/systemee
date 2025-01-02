<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseHelper;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
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

    public function create(): Response
    {
        $permissions = [
            [
                "pageName" => "Utenti",
                "permissions" => [
                    "create" => false,
                    "read" => true,
                    "update" => false,
                    "delete" => false,
                ]
            ],
            [
                "pageName" => "Club",
                "permissions" => [
                    "create" => false,
                    "read" => true,
                    "update" => false,
                    "delete" => false,
                ]
            ],
            [
                "pageName" => "Artisti",
                "permissions" => [
                    "create" => true,
                    "read" => true,
                    "update" => true,
                    "delete" => true,
                ]
            ],
            [
                "pageName" => "Richieste",
                "permissions" => [
                    "create" => false,
                    "read" => true,
                    "update" => true,
                    "delete" => false,
                ]
            ]
        ];

        return Inertia::render('settings/roles/create', [
            'data' => $permissions
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

    public function view(): Response
    {
        $permissions = [
            [
                "pageName" => "Utenti",
                "permissions" => [
                    "create" => false,
                    "read" => true,
                    "update" => false,
                    "delete" => false,
                ]
            ],
            [
                "pageName" => "Club",
                "permissions" => [
                    "create" => false,
                    "read" => true,
                    "update" => false,
                    "delete" => false,
                ]
            ],
            [
                "pageName" => "Artisti",
                "permissions" => [
                    "create" => true,
                    "read" => true,
                    "update" => true,
                    "delete" => true,
                ]
            ],
            [
                "pageName" => "Richieste",
                "permissions" => [
                    "create" => false,
                    "read" => true,
                    "update" => true,
                    "delete" => false,
                ]
            ]
        ];

        return Inertia::render('settings/roles/view', [
            'data' => $permissions
        ]);
    }

}
