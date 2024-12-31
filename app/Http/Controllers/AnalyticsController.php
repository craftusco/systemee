<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Artist;
use App\Services\AnalyticsService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AnalyticsController extends Controller
{
    protected $analyticsService;

    public function __construct(AnalyticsService $analyticsService)
    {
        $this->analyticsService = $analyticsService;
    }

    public function index(Request $request)
    {
        $startDate = $request->query('start_date', now()->startOfMonth()->toDateString());
        $endDate = $request->query('end_date', now()->endOfMonth()->toDateString());

        $eventStats = $this->analyticsService->generateStats(Event::query(), $startDate, $endDate);

        $artistStats = $this->analyticsService->generateStats(Artist::query(), $startDate, $endDate);

        return Inertia::render('analytics/index', [
            'page' => [
                'data' => [
                    'events' => $eventStats,
                    'artists' => $artistStats,
                ],
                'filters' => [
                    'start_date' => $startDate,
                    'end_date' => $endDate,
                ],
            ],
        ]);
    }
}
