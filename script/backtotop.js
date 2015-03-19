$(document).ready(function(){

//首先将#back-to-top隐藏

 $("#back-to-top").hide(); //若要原效果初始隐藏的话，改成hide

//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失

$(function () {
$(window).scroll(function(){
if ($(window).scrollTop()>100){
$("#back-to-top").fadeIn(1000);
}
else
{
$("#back-to-top").fadeOut(1000);
}
});

//当点击跳转链接后，回到页面顶部位置

$(".top_1").click(function(){
$('body,html').animate({scrollTop:0},800);
return false;
});
});
});