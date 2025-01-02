<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseHelper;
use App\Models\Club;
use App\Models\Message;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\QueryBuilder;

class InboxController extends Controller
{
    public function index(Request $request)
    {
        $filters = $request->query();
        //dd($filters);

        $data = QueryBuilder::for(Message::class)
            ->paginate($filters['page_size'] ?? 25)
            ->appends(request()->query());


        return Inertia::render('inbox/index', [
            'page' => ResponseHelper::formatResponse($data, $filters)
        ]);
    }


    public function view($id)
    {
        $product = Message::where("id", $id)->first();
        return Inertia::render('inbox/view', ['data' => $product]);
    }

}
