console.clear();

var colors = ["#F25022", "#00A4EF", "#7FBA00", "#FFB900"];

//Cursor
$(window).mousemove(function(e){
	var pageX = e.pageX;
	var pageY = e.pageY;
	$("#cursor, #cursorCenter").css("left", pageX +"px");
	$("#cursor, #cursorCenter").css("top", pageY +"px");
	$(".pages").mouseenter(function(){
		$("#cursor").addClass("pointer");
	});
	$(".pages").mouseleave(function(){
		$("#cursor").removeClass("pointer");
	});
	$(".languageSwitch").mouseenter(function(){
		$("#cursor").addClass("pointer");
	});
	$(".languageSwitch").mouseleave(function(){
		$("#cursor").removeClass("pointer");
	});
	$(".contact").mouseenter(function(){
		$("#cursor").addClass("pointer");
	});
	$(".contact").mouseleave(function(){
		$("#cursor").removeClass("pointer");
	});
	$(".contactCard").mouseenter(function(){
		$("#cursor").addClass("pointer");
	});
	$(".contactCard").mouseleave(function(){
		$("#cursor").removeClass("pointer");
	});
	$(".closeCard").mouseenter(function(){
		$("#cursor").addClass("pointer");
	});
	$(".closeCard").mouseleave(function(){
		$("#cursor").removeClass("pointer");
	});
});




//Loader Control
// $(document).ready(function(){
	
// });

//Guide Control
$(".guidance").click(function () {
	$(".guidance").fadeOut();
	$("#cursor").css("opacity", "1");
	$("#cursorCenter").css("opacity", "1");
});

//Resume Control
$(document).ready(function () {
	setTimeout(function(){
		$('body').addClass("loaded");
		setTimeout(function(){$(".loaderWrapper, .loader").hide()},2000);
	},3500);
	var win_w = $(window).innerWidth();
	var pages_w = $(".pages").innerWidth();
	var move = win_w + pages_w;

	$(".resume, .self-intro, .showcase").css("margin-right", win_w + "px");
	var page = 0;
	$(".pages").click(function () {
		page += 1;
		$(".circle:nth-child(" + page + ")").removeClass("bright");
		if (page < 3) {
			$(".page").css("left", "-" + page * move + "px");
			$(".circle:nth-child(" + (page + 1) + ")").addClass("bright");
		} else {
			page = 0;
			$(".page").css("left", "-" + page * move + "px");
			$(".circle:nth-child(" + page + 1 + ")").addClass("bright");
		}
	});
});
$(window).resize(function () {
	win_w = $(window).innerWidth();
	pages_w = $(".pages").innerWidth();
	move = win_w + pages_w;

	$(".resume, .self-intro, .showcase").css("margin-right", win_w + "px");
	var page = 0;
	$(".page").css("left", "-" + page * move + "px");
	$(".pages").click(function () {
		page += 1;
		if (page < 3) {
			$(".page").css("left", "-" + page * move + "px");
		} else {
			page = 0;
			$(".page").css("left", "-" + page * move + "px");
		}
	});
});

//Language
var lan_en = true;
$(".languageSwitch").click(function () {
	lan_en = !lan_en;
	if (lan_en) {
		console.log("clicked_en");
		$(".languageSwitch .control").removeClass("ch");
		$(".languageSwitch").removeClass("light");
		$(".languageSwitch .control").addClass("en");
		$(".languageSwitch .words_ch").css("opacity", "0");
		$(".languageSwitch .words_en").css("opacity", "1");
		$(".pages .page .resume img").attr("src", "https://i.imgur.com/sk1dfk3.png");
		$(".pages .page .self-intro img").attr("src", "https://i.imgur.com/0DRaumg.png");
		$(".pages .page .showcase img").attr("src", "https://i.imgur.com/LyohyOm.png");
	} else {
		console.log("clicked_ch");
		$(".languageSwitch").addClass("light");
		$(".languageSwitch .control").removeClass("en");
		$(".languageSwitch .control").addClass("ch");
		$(".languageSwitch .words_en").css("opacity", "0");
		$(".languageSwitch .words_ch").css("opacity", "1");
		$(".pages .page .resume img").attr("src", "https://i.imgur.com/wAyOWPa.png");
		$(".pages .page .self-intro img").attr("src", "https://i.imgur.com/getvjbH.png");
		$(".pages .page .showcase img").attr("src", "https://i.imgur.com/RymtsoE.png");
	}
});

//ContactCard
$(".contact").click(function(){
	$(".contactCardWrapper").fadeIn();
	setTimeout(function(){
		$(".contactCard").addClass("show");
		$("#cursor").addClass("dark");
		$("#cursorCenter").addClass("dark");
		setTimeout(function(){
		$(".closeCard").fadeIn();			
		},1500);
	},1000);
});
$(".closeCard").click(function(){
	$(".contactCard").removeClass("show");;
	$("#cursor").removeClass("dark");
	$("#cursorCenter").removeClass("dark");
	setTimeout(function(){
	$(".contactCardWrapper").fadeOut();
	$(".closeCard").fadeOut();	
	},500);
});