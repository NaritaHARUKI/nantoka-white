<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Good extends Model
{
    use HasFactory;

    public static function handleGood(Request $request, $good)
    {
        $isGood = $good->where([
            ['userId', '=', $request['userId']],
            ['workId', '=', $request['workId']],
        ])->first();

        if ($isGood) {
            $good->destroy($isGood->id);
            return 'delete_sucsses';
        }

        $good->userId = $request['userId'];
        $good->workId = $request['workId'];
        $good->save();
        return $good;
    }

    public static function getGooded(Request $request, $good)
    {
        $getGooded = $good->where('userId', '=', $request['userId'])->get();
        return $getGooded;
    }

    public static function getGoodList(Request $request, $good)
    {
        $getGooded = $good->where('userId', '=', $request['id'])->get();
        $stack = [];
        for ($i = 0; $i < count($getGooded); $i++) {
            array_push($stack, $getGooded[$i]->workId);
        }
        return $stack;
    }
}
