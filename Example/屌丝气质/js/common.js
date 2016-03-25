function common() {
    var common = {};
    //获取屏幕宽高
    common.body=$("body");
    common.screenH = document.body.clientHeight;
    common.screenW = document.body.clientWidth;
    //判断设备是pc还是phone
    common.isPc = function () {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    };
    //根据设置执行touch还是click事件
    common.event = common.isPc() ? "click" : "touchstart";
    common.tipsBox = function (text) {
        return $('<div class="error"><div class="error_text">' + text + '</div></div>')
    }

    return common;
}


//横屏显示
$(document).ready(function(){
    var sWidth = Math.min(window.screen.availWidth, window.screen.width);
    var sHeight = Math.min(window.screen.availHeight, window.screen.height);

    var coefficientHeight =  sHeight / 960;
    var coefficientWidth = sWidth / 750;
    var coefficient = coefficientHeight < coefficientWidth ? coefficientHeight : coefficientWidth;


    var imgMask = document.getElementById("orientationchangeImg");
    window.addEventListener("orientationchange",function(){
        switch(window.orientation)
        {
            case 0:
                imgMask.style.display = "none";
                document.addEventListener('touchmove', function(evt){}, false);
                break;
            case 90:
            case -90:
                imgMask.style.display = "block";
                document.addEventListener('touchmove', function(evt){ evt.preventDefault(); }, false);
                break;
        }
    }, false);

    switch(window.orientation)
    {
        case 0:
            imgMask.style.display = "none";
            break;
        case 90:
        case -90:
            imgMask.style.display = "block";
            break;
    }

    var ua = navigator.userAgent.toLowerCase();
    var index = ua.indexOf("android");
    if(index > -1) {
        var version = parseFloat(ua.slice(index + 8));
        if(version < 4){
            notSupportedImg = document.getElementById("notSupportedImg");
            if(notSupportedImg){
                notSupportedImg.style.display = "block";
            }
        }
    }
});

