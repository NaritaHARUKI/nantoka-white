<?php

namespace App\Services;

use Illuminate\Http\Request;

class UserService
{

    public function isExist($isUser)
    {
        return $isUser ? 'すでに存在しているユーザーです' : '';
    }
}
