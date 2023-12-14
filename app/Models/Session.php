<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Session extends Model
{
    use HasFactory;

    protected $table = 'session';

    public static function isSession($session, $request, $ip)
    {
        $isSession = $session->where('userId', '=', $request)->first();

        if ($isSession) {
            $isSession->updated_at = Carbon::now();
            $isSession->save();
        }

        if (!$isSession) {
            $session->userId = $request;
            $session->ip = $ip;
            $session->save();
        }

        return;
    }

    public static function deleteSession($session, $request)
    {
        $session->destroy($request['id']);
        return 'session_delete_sucsses';
    }
}
