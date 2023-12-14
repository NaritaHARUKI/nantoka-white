<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'api'], function () {
    Route::get('posts', 'App\Http\Controllers\Api\PostController@index');
    //user
    Route::post('createUser', 'App\Http\Controllers\Api\UserController@createUser');
    Route::post('editProfile', 'App\Http\Controllers\Api\UserController@editProfile');
    Route::post('login', 'App\Http\Controllers\Api\UserController@login');
    Route::get('loginSession', 'App\Http\Controllers\Api\UserController@loginSession');
    Route::post('deleteSession', 'App\Http\Controllers\Api\UserController@deleteSession');
    //work
    Route::post('create', 'App\Http\Controllers\Api\WorkController@create');
    Route::post('storeImg', 'App\Http\Controllers\Api\WorkController@storeImg');
    Route::post('getList', 'App\Http\Controllers\Api\WorkController@getList');
    Route::post('getDetail', 'App\Http\Controllers\Api\WorkController@getDetail');
    Route::post('getCreateList', 'App\Http\Controllers\Api\WorkController@getCreateList');
    //good
    Route::post('handleGood', 'App\Http\Controllers\Api\GoodController@handleGood');
    Route::post('getGooded', 'App\Http\Controllers\Api\GoodController@getGooded');
    Route::post('getGoodList', 'App\Http\Controllers\Api\GoodController@getGoodList');
});
