<?php

namespace App\Models;

use App\Facades\UserService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class User extends Model
{
    use HasFactory;

    protected $table = 'users';

    public static function createUser($users, Request $request)
    {
        $data = $request->data;
        $isUser = $users->where('mail', $data["mail"])->exists();
        $errMessage = UserService::isExist($isUser);

        $users->name = $data["name"];
        $users->mail = $data["mail"];
        $users->password = $data["password"];
        $users->save();
        return $errMessage ? $errMessage : '';
    }

    public static function editProfile($users, Request $request)
    {
        $getTargetUser = $users->where('id', '=', $request['id'])->get()->first();
        $getTargetUser->name = $request["username"];
        $getTargetUser->mail = $request["usermail"];
        $getTargetUser->save();
        return $getTargetUser;
    }
}
