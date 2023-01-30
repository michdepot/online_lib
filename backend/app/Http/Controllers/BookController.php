<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {

        $books = Book::all();

        return response()->json($books);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|min:3|max:100',
            'description' => 'required'
        ]);

        $books = Book::create([
            'user_id' => Auth::id(),
            'title' => $request->title,
            'description' => $request->description
        ]);

        return response()->json([
            "data" => $books,
            "message" => "Book published!"
        ]);

    }

    public function writtenBooks()
    {
        $books = User::find(Auth::id())->writtenBooks;

        return response()->json($books);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $book = Book::findOrFail($id);

        return response()->json([
            "data" => $book,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateWrittenBook(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|min:3|max:100',
            'description' => 'required'
        ]);

        $books = Book::find($id)->update([
            'user_id' => Auth::id(),
            'title' => $request->title,
            'description' => $request->description
        ]);

        return response()->json([
            "data" => $books,
            "message" => "Book published!"
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteWrittenBook($id)
    {
        $book = Book::find($id)->delete();

        return response()->json([
            "data" => $book,
            "message" => "Book deleted."
        ]);
    }
}
