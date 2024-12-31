<?php

namespace App\Services;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class AnalyticsService
{
    /**
     * Generate statistics for a model within a date range.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string $startDate
     * @param string $endDate
     * @param string $dateColumn
     * @return Collection
     */
    public function generateStats($query, string $startDate, string $endDate, string $dateColumn = 'created_at'): Collection
    {
        // Generate all dates between start and end
        $dateRange = collect();
        $current = now()->parse($startDate);
        $end = now()->parse($endDate);

        while ($current->lte($end)) {
            $dateRange->push($current->format('Y-m-d'));
            $current->addDay();
        }

        // Fetch records grouped by date
        $records = $query
            ->whereBetween($dateColumn, [$startDate, $endDate])
            ->get()
            ->groupBy(function ($item) use ($dateColumn) {
                return $item->$dateColumn->format('Y-m-d');
            });

        // Map records to all dates in the range
        return $dateRange->map(function ($date) use ($records) {
            return [
                'date' => $date,
                'total' => $records->has($date) ? $records[$date]->count() : 0,
            ];
        });
    }
}
