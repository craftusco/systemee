<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use App\Models\Club;
use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use Spatie\QueryBuilder\QueryBuilder;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $stats = [
            'total_artists' => Artist::count(),
            'total_events' => Event::count(),
            'total_clubs' => Club::count(),
            'total_orders' => Event::count(),
        ];

        return Inertia::render('index', [
            'data' => $stats,
        ]);
    }


}
