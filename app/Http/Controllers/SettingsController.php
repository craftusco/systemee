<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingsController extends Controller
{
    public function page(Request $request)
    {

        return Inertia::render('settings/index');
    }


}
