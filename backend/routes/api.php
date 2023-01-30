<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\ChapterController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\UserBookController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('signup', [AuthController::class, 'signup']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('books', [BookController::class, 'index']);
    Route::post('books', [BookController::class, 'store']);
    Route::get('user_book', [UserController::class, 'allBooks']);
    Route::delete('user_book/{id}', [UserController::class, 'deleteBook']);
    Route::post('user_book/{id}', [UserController::class, 'addBook']);

    //WrittenBooks
    Route::get('writtenBooks', [BookController::class, 'writtenBooks']);
    Route::get('writtenBooks/{id}', [BookController::class, 'show']);
    Route::put('writtenBooks/{id}', [BookController::class, 'updateWrittenBook']);
    Route::delete('writtenBooks/{id}',[BookController::class, 'deleteWrittenBook']);

    // Chapters
    Route::get('chapters', [ChapterController::class, 'index']);
    Route::get('chapters/{id}', [ChapterController::class, 'show']);
    Route::get('chapter/{id}', [ChapterController::class, 'showChapter']);
    Route::post('chapters/{id}', [ChapterController::class, 'store']);
    Route::delete('chapters/{id}', [ChapterController::class, 'destroy']);
    Route::put('chapters/{id}', [ChapterController::class, 'update']);

    // Subscription
    Route::post('subscribe', [SubscriptionController::class, 'store']);
    
});
