/**
 * Created by yubo on 2016/11/16.
 * this is for canvas background color
 */
(function($){
    $.fn.extend({
        drawBackground:function(co){
            var o = {
                //需要绘制的宽度
                width:$(window).width(),
                //需要绘制的高度
                height:$(window).height(),
                //圆圈的颜色
                circleColor:"#FFFFFF",
                //切换时间
                changeTime:5000
            }

            var option = $.extend(o,co);
            var w = option.width,h = option.height;
            $("#canvasbg").css({
                width:w+"px",
                height:h+"px"
            })
            var cxt = drawCanvasReturnCxt($(this).attr("id"),option.width,option.height);
            drawVideo(cxt,w,h);
        }
    })
    //在需要初始化的背景中添加画布，并且return出来cxt
    function drawCanvasReturnCxt(obj,w,h){
        // var html = "<canvas id='"+obj+"_bg'></canvas>";
        // $("#"+obj).append(html);
        var canvas =document.getElementById("background");
            // $("#"+obj+"_bg");
            canvas.width = w;
        canvas.height = h;
        var context = canvas.getContext("2d");
        return context;
    }
    //绘制背景视频
    function drawVideo(cxt,w,h){
        var fps = 1000/30; // 1/30秒
        var videoObj = document.getElementById("bgVideo");
        setInterval(function(){
            cxt.drawImage(videoObj, 0, 0,w,h);
        }, fps);
    }

})(jQuery)
