<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Good;
use App\Models\Work;
// use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Pagination\Paginator;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Pagination\LengthAwarePaginator;


class GoodController extends Controller
{
    //
    public function handleGood(Request $request)
    {
        $good = new Good();
        $handleGood = Good::handleGood($request, $good);
        return $handleGood;
    }

    public function getGooded(Request $request)
    {
        $good = new Good();
        $getGooed = Good::getGooded($request, $good);
        return $getGooed;
    }

    public function getGoodList(Request $request)
    {
        $good = new Good();
        $getArray = Good::getGoodList($request, $good);
        $goodList = Work::whereIn('id', $getArray)->paginate(
            3, // 1ページあたりの件数
            ['*'],
            'page',
            $request['page'] ? $request['page'] : 1 // 現在のページインデックス値
        );
        return $goodList;
    }
}
