function CheckInternetExplorer() {
    var bVersion = navigator.appVersion;
    var version = bVersion.split(";");
    if (version.length > 1) {
        var trimVersion = parseInt(version[1].replace(/[ ]/g, "").replace(/MSIE/g, ""));
        var $body = document.getElementsByTagName("body")[0];
        var msg = "<div style=\"text-align:center;background-color:#ff6a00;color:#fff;line-height:40px;;font-size:14px;\">您好，你当前使用的IE浏览器版本过低，为了获取更好的浏览体验，建议你使用谷歌(chrome)\火狐(Firefox)等标准浏览器，或升级IE10+以上版本！</div>";
        if (trimVersion <= 9) {
            msg += $body.innerHTML;
            $body.innerHTML = msg;
        }
    }
}

//保证所有响应式图片列表同一尺寸，避免上传图片尺寸不一致排版混乱
$(function () {
    var $imageSameSize = $(".imgae-same-size");
    $imageSameSize.each(function () {
        var $this = $(this);
        var $images = $this.find("img");
        if ($images.length == 0) {
            return true;
        }
        var $firstImg = $images.eq(0);
        //$(window).on("onload",function(){}) //弃用，效率太低,要等所有页面图片加载完毕才执行
        //$images.eq(0).attr("onload", function (){$images.ImageSameSize()}); //弃用火狐浏览器下获取不到响应式图片的实际高度
        var img = new Image();
        img.src = $firstImg.attr("src");
        img.onload = function () {
            $images.ImageSameSize();
        };
    });
});


//自动适应尺寸，如果容器列表项内有图片需要自动适应宽度和高度，所有容器中的图片文件尺寸默认用同级第一个容器尺寸。
;(function ($, window, undefined) {
    $.fn.ImageSameSize = function (index) {
        var $objs = this;
        if (index == undefined) {
            index = 0;
        }
        var $templateImage = $objs.eq(index);
        var SetSize = function () {
            var height = $templateImage.css("height").replace(/\s+|px/gi, "");
            var width = $templateImage.css("width").replace(/\s+|px/gi, "");
            $objs.each(function (idx) {
                $(this).css({ "width": width + "px", "height": height + "px" });
            });
        };
        SetSize();
        var bindResize = $templateImage.attr("data-bindResize");
        if (bindResize == undefined) {
            $(window).resize(function () {
                $templateImage.css({ "width": "auto","height": "auto" });
                SetSize();
            });
            $templateImage.attr("data-bindresize", 1);
        }
    };
})(jQuery, window);
//tab栏切换
function tab_down(tab_k, tab_con, tab_dz) {
    var $div_li = $(tab_k);
    var timeout
    if (tab_dz == "click") {
        $div_li.click(function () {
            $(this).addClass("selected").siblings().removeClass("selected");
            var index = $div_li.index(this);
            $(tab_con).eq(index).addClass("show").siblings().removeClass("show");
        })
    } else if (tab_dz == "mouseenter") {
        $div_li.mouseenter(function () {
            $(this).addClass("selected").siblings().removeClass("selected");
            var index = $div_li.index(this);
            $(tab_con).eq(index).addClass("show").siblings().removeClass("show");
        })
    }
}