<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function allBooks()
    {
        return User::find(Auth::id())->books;
    }

    public function deleteBook($id)
    {
        return User::find(Auth::id())->books()->detach($id);
    }

    public function addBook($id)
    {
        $data = User::find(Auth::id())->books()->attach($id);

        return response()->json([
            'data' => $data,
            'message' => "Book is successfully added to your library!"
        ]);
    }
}
