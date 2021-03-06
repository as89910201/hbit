<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="utf-8">
    <title>{{$title}}</title>
    <meta name="keywords" content="Java培训班,PHP培训班,Html5培训班,移动开发培训,大数据培训,IT培训" />
    <meta name="description" content="背景鸿博教育，坐落于首都北京市海淀区区，IT职业教育领军品牌。" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link type="image/x-icon" rel="shortcut icon" href="/favicon.ico" />
    <link rel="stylesheet" href="/static/templates/main/css/base_index.css" />
    <link rel="stylesheet" type="text/css" href="/static/templates/main/css/reset.css" />
    <link rel="stylesheet" type="text/css" href="/static/templates/main/css/style.css" />
    <link rel="stylesheet" type="text/css" href="/static/templates/main/css/index.css" />
    <link type="text/css" rel="stylesheet" href="/static/css/validate.css" />
    <link type="text/css" rel="stylesheet" href="/static/css/pagination.css" />
    <link type="text/css" rel="stylesheet" href="/static/scripts/artdialog/ui-dialog.css" />
</head>
<body>
{{--头部导航--}}
<div class="topbar">
    <div class="inner">
        <div class="top_l">
            <p>鸿博教育教育，良心教育，专注十年</p>
        </div>
        <div class="top_r">
            <span class="am-fl" style="float: left;width: 40px;height: 40px;display: inline-block;"><img src="/static/upload/img/nav_icon4.png" class="img"></span>
            <div class="am-fl" style="float: left;">
                <h5 style="color: #9a9a9a;font-size: 12px;line-height: 1em;">全国统一咨询热线：</h5>
                <h2 style="color: #ff0e0e;font-size: 18px;font-weight: 800;line-height: 1.6em;font-family: Arial;">010-57032333</h2>
            </div>
        </div>
    </div>
</div>
<div class="nav_main">
    <div class="nav_fixed">
        <div class="nav_bg clear" title="">
            <div class="base">
                <div class="logo">
                    <a href="/" target="_blank" title="鸿博IT教育-匠心打造,品质铸就"><img src="/static/upload/img/201802032231514431.png"></a>
                </div>
                <img src="/static/upload/img/nav_r_ico.png" class="index_nav_r" />
            </div>
        </div>
        <div class="nav_right base" title="">
            <a href="/" target="_blank" class="nav" id="1" title="">首页</a>
            @if($nav[0]->list_order == 2)
                <span class="navs">{{$nav[0]->name}}</span>
            @endif
                @foreach($nav as $item)
                    @if($item->parent_id == 0 && $item->list_order != 2)
                        <a href="/{{$item->href}}" class="nav"  id="{{$item->id}}">{{$item->name}}</a>
                    @endif
                @endforeach
        </div>
        <div class="class170109" title="">
            <div class="basebase" title="">
                <div class="base clear" title="">
                    @foreach($nav as $item)
                        @if($item->parent_id == 2)
                            <a href="/{{$item->href}}" id="{{$item->id}}" target="_blank" title="{{$item->name}}"><img src="{{$item->img}}" width="63" height="73"><u>{{$item->name}}</u></a>
                        @endif
                    @endforeach
                    <a href="tencent://message/?Menu=yes&amp;uin=104044302" target="_blank" title="云计算"><img src="/static/upload/img/linux_ico.png" width="63" height="73"><u>云计算</u></a>
                    <a href="tencent://message/?Menu=yes&amp;uin=104044302" target="_blank" title="人工智能"><img src="/static/upload/img/big_ico.png" width="63" height="73"><u>人工智能</u></a>
                    <a href="tencent://message/?Menu=yes&amp;uin=104044302" target="_blank" title="UI/UE设计"><img src="/static/upload/img/ui_ico.png" width="63" height="73"><u>UI/UE设计</u></a>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="nav_main">
    <div class="base_fixed" style="top: 0px;">
        <a href="tencent://message/?Menu=yes&amp;uin=104044302" rel="nofollow" target="_blank" class="f_a1">报名咨询</a>
        <a href="tencent://message/?Menu=yes&amp;uin=104044302" rel="nofollow" target="_blank" class="f_a2">0元入学</a>
        <a href="tencent://message/?Menu=yes&amp;uin=104044302" rel="nofollow" target="_blank" class="f_a3">助学贷款</a>
        <a href="tencent://message/?Menu=yes&amp;uin=104044302" rel="nofollow" target="_blank" class="f_a4">就业保障</a>
        <a href="tencent://message/?Menu=yes&amp;uin=104044302" rel="nofollow" target="_blank" class="f_a5">视频下载</a>
        <a href="tencent://message/?Menu=yes&amp;uin=104044302" target="_blank" class="f_a7">在线公开课</a>
        <a href="tencent://message/?Menu=yes&amp;uin=104044302" rel="nofollow" target="_blank" class="f_a6">咨询热线<i>010-57032333</i></a>
        <img src="/static/upload/img/qf_fix02.png" style="display: block;width:67px;border-top:1px solid #fff;cursor:pointer;display:none" class="qf_fix02">
    </div>
</div>
<script src="/static/templates/main/js/jquery-1.12.4.min.js"></script>

