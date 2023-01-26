<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Validator;
use App\Models\User;

class AuthController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function signup(Request $request)
    {
        $validatedData = $request->validate([
			'firstName' => 'required|string|max:100',
            'lastName' => 'required|string|max:100',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
            'cpassword' => 'required|same:password'
		]);

		$validatedData['password'] = Hash::make($validatedData['password']);

		if(User::create($validatedData)) {
			return response()->json([
                "message" => "User registered."
            ], 201);
		}

		return response()->json([
            "message" => "Invalid Credentials."
        ], 404);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request) {
		$request->validate([
			'email' => 'required|email',
			'password' => 'required',
		]);

		$user = User::where('email', $request->email)->first();

		if (! $user || ! Hash::check($request->password, $user->password)) {
			// throw ValidationException::withMessages([
			// 	'email' => ['The provided credentials are incorrect.'],
            //     'password'=>['The provided credentials are incorrect.'],
			// ]);
            return response()->json([
                'error'=>['The provided credentials are incorrect.']
            ],422);
		}

		return response()->json([
			'user' => $user,
			'access_token' => $user->createToken($request->email)->plainTextToken
		], 200);
	}

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
