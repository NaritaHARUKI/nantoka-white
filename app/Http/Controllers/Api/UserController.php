<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Session;
use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;

class UserController extends Controller
{
    //
    public function createUser(Request $request)
    {
        $user = new User;
        $createUser = User::createUser($user, $request);
        return $createUser
            ? response()->json($createUser, 500)
            : response()->json($createUser, 200);
    }

    public function editProfile(Request $request)
    {
        $users = new User;
        $editProfile = User::editProfile($users, $request);
        return $editProfile
            ? response()->json($editProfile, 200)
            : response()->json($editProfile, 500);
    }

    public function login(Request $request)
    {
        $session = new Session;
        $userData = User::where('mail', $request->data['mail'])->first();
        $isLoginSucusess =  $userData->password === $request->data['password'];
        $ip = $request->ip();
        if ($isLoginSucusess) {
            Session::isSession($session, $userData->id, $ip);
        }
        return $isLoginSucusess
            ? response()->json($userData, 200)
            : response()->json(false, 500);
    }

    public function loginSession(Request $request)
    {
        $ip = $request->ip();
        $isSession = Session::where('ip', '=', $ip)->first();
        if (!$isSession) return response()->json(null, 200);
        if (Carbon::now()->diffInMinutes($isSession->updated_at) > 30) {
            return response()->json(null, 200);
        }
        if ($isSession) {
            $userId = $isSession->userId;
            $userData = User::where('id', $userId)->first();
            return response()->json($userData, 200);
        }
    }

    public function deleteSession(Request $request)
    {
        $session = new Session;
        $isSession = Session::where('userId', '=', $request['id'])->first();
        return Session::deleteSession($session, $isSession)
            ? response()->json('sucusess', 200)
            : response()->json('miss', 200);
    }
}
