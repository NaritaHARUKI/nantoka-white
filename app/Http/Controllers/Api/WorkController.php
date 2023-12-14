<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Pagination\Paginator;
use Illuminate\Http\Request;
use App\Models\Work;


class WorkController extends Controller
{
    //
    public function create(Request $request)
    {
        if ($request['id']) {
            $work = new Work;
            $isWork = Work::find($request['id']);
            if (!$isWork) return response()->json(false, 500);
            $create = Work::change($isWork, $request);
            return $create
                ? response()->json($create, 200)
                : response()->json($create, 500);
        }
        $work = new Work;
        $create = Work::create($work, $request);
        return $create
            ? response()->json($create, 200)
            : response()->json($create, 500);
    }

    public function storeImg(Request $request)
    {
        $store_path = $request['path']->store('public/images');
        $image_path = 'storage/' . substr($store_path, 7);
        $work = Work::find($request['id']);
        $work->path = $image_path;
        $work->save();
        return $work
            ? response()->json($work, 200)
            : response()->json($work, 500);
    }

    public function getList(Request $request)
    {
        $workList = Work::paginate(
            3, // 1ページあたりの件数
            ['*'],
            'page', 
            $request['page'] ? $request['page'] : 1 // 現在のページインデックス値
        );
        return $workList;
    }

    public function getDetail(Request $request)
    {
        $workDetail = Work::find($request['id']);
        return $workDetail;
    }

    public function getCreateList(Request $request)
    {
        $createList = Work::where('userId', '=', $request['id'])->paginate(
            3, // 1ページあたりの件数
            ['*'],
            'page', 
            $request['page'] ? $request['page'] : 1 // 現在のページインデックス値
        );
        return $createList;
    }
}
