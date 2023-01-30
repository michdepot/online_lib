<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Auth;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\subscription>
 */
class SubscriptionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "user_id"=>Auth::id(),
            "subscription"=>fake()->randomElement(['Irregular', 'Regular', 'VIP']),
            "subscriptin_date"=>now(),
            "expiry_date" => now()->addMonth()
        ];
    }
}
