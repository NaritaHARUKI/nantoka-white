<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Work extends Model
{
    use HasFactory;

    protected $table = 'works';

    public static function create($work, Request $request)
    {
        $work->name = $request['name'];
        $work->title = $request['title'];
        $work->subtitle = $request['subtitle'];
        $work->content = $request['content'];
        $work->userId = $request['userId'];
        $work->aspect = $request['aspect'];
        $work->path = null;
        $work->save();
        return $work;
    }

    public static function getWorkList(array $getArray, $work)
    {
        $getWorkList = [];
        for ($i = 0; $i < count($getArray); $i++) {
            $getWork = $work->where('id', '=', $getArray[$i])->first();
            array_push($getWorkList, $getWork);
        }
        return $getWorkList;
    }

    public static function change($isWork, Request $request)
    {
        $work = $isWork;
        $work->name = $request['name'];
        $work->title = $request['title'];
        $work->subtitle = $request['subtitle'];
        $work->content = $request['content'];
        $work->userId = $request['userId'];
        $work->aspect = $request['aspect'];
        $work->save();
        return $work;
    }
}
