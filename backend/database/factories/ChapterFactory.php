<?php

namespace Database\Factories;

use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Chapter>
 */
class ChapterFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'book_id' => Book::first(),
            'title' => 'Chapter ' . fake()->word,
            'content' => fake()->paragraph(3),
            'created_at' => now(),
            'updated_at' => now()
        ];
    }
}
