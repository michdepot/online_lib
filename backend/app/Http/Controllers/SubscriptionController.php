<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class SubscriptionController extends Controller
{
    public function check($subscription)
    {
        if($subscription == "Irregular"){
            return now()->addMonth();
        }elseif($subscription == "Regular"){
            return now()->addMonths(6);
        }elseif($subscription == "VIP"){
            return now()->addYear();
        }

    }
    public function store(Request $request)
    {

        $info = new Subscription;
        $info->user_id = Auth::id();
        $info->subscription = $request->subscription;
        $info->subscription_date = now();
        $info->expiry_date = $this->check($request->subscription);
        $info->save();

        return response()->json([
            "data" => $info,
            "message" => "Subscribe!"
        ]);
    }

    public function show()
    {
        // return Subscription::find()
    }
}
