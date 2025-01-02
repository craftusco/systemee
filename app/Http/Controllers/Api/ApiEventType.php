<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Helpers\ResponseHelper;
use App\Models\EventType;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\QueryBuilder;

class ApiEventType extends Controller
{
    public function index(Request $request)
    {

        $data = QueryBuilder::for(EventType::class)
            ->appends(request()->query());

        return response()->json([
            'data' => $data
        ]);
    }


}
