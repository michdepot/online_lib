<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Book;
use App\Models\UserBook;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use DB;

class UserBookController extends Controller
{
    // public function index()
    // {
    //     $user = Auth::id();
    //     return $user->user_book()->all();
    // }
}
