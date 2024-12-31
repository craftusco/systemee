<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\QueryBuilder;

class SettingsController extends Controller
{
    public function page(Request $request)
    {

        return Inertia::render('settings/index');
    }



}
