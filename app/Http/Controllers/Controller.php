<?php

namespace App\Http\Controllers;

abstract class Controller
{
    //

    protected function paginateResponse($paginator)
    {
        return [
            'data' => $paginator->items(),
            'meta' => [
                'object' => [
                    'current_page' => $paginator->currentPage(),
                    'from' => $paginator->firstItem(),
                    'last_page' => $paginator->lastPage(),
                    'per_page' => $paginator->perPage(),
                    'to' => $paginator->lastItem(),
                    'total' => $paginator->total(),
                ],
            ],
        ];
    }
}
