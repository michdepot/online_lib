<?php

namespace App\Http\Controllers;

use App\Models\Chapter;
use App\Models\Book;
use Illuminate\Http\Request;

class ChapterController extends Controller
{
    public function index()
    {
        return Chapter::all();
    }

    public function show($id)
    {
        return Book::find($id)->chapters;
    }

    public function showChapter($id){

        return Chapter::findOrFail($id);
    }

    public function store(Request $request, $id)
    {
        return Chapter::create([
            "book_id" => $id,
            "title" => $request->title,
            "content" => $request->content
        ]);
    }
}
