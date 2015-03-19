//services
$(".serBox").hover(
  function () {
	 $(this).children().stop(false,true);
	 $(this).children(".serBoxOn").fadeIn("slow");
     $(this).children(".pic1").animate({right: -225},400);
     $(this).children(".pic2").animate({left: 0},400);
     $(this).children(".txt1").animate({left: -225},400);
     $(this).children(".txt2").animate({right: 15},400);	 
	 }, 
  function () {
	 $(this).children().stop(false,true);
	 $(this).children(".serBoxOn").fadeOut("slow");
	 $(this).children(".pic1").animate({right:0},400);
     $(this).children(".pic2").animate({left: -225},400);
     $(this).children(".txt1").animate({left: 15},400);
     $(this).children(".txt2").animate({right: -225},400);	
  }
);



