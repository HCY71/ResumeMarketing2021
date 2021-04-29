console.clear();

var colors = ["#F25022", "#00A4EF", "#7FBA00", "#FFB900"];

//Cursor
$(window).mousemove(function (e) {
	var pageX = e.pageX;
	var pageY = e.pageY;
	$("#cursor, #cursorCenter").css("left", pageX + "px");
	$("#cursor, #cursorCenter").css("top", pageY + "px");
	$(".pages").mouseenter(function () {
		$("#cursor").addClass("pointer");
	});
	$(".pages").mouseleave(function () {
		$("#cursor").removeClass("pointer");
	});
	$(".languageSwitch").mouseenter(function () {
		$("#cursor").addClass("pointer");
	});
	$(".languageSwitch").mouseleave(function () {
		$("#cursor").removeClass("pointer");
	});
	$(".contact").mouseenter(function () {
		$("#cursor").addClass("pointer");
	});
	$(".contact").mouseleave(function () {
		$("#cursor").removeClass("pointer");
	});
});




//Loader Control
$(document).ready(function () {
	setTimeout(function () {
		$('body').addClass("loaded");
		setTimeout(function () {
			$(".loaderWrapper, .loader").hide()
		}, 2000);
	}, 3500);
});

//Guide Control
$(".guidance").click(function () {
	$(".guidance").fadeOut();
	$("#cursor").css("opacity", "1");
	$("#cursorCenter").css("opacity", "1");
});

//Resume Control
$(document).ready(function () {
	var win_w = $(window).innerWidth();
	var pages_w = $(".pages").innerWidth();
	var move = win_w + pages_w;
	var page = 0;

	$(window).resize(function () {
		win_w = $(window).innerWidth();
		pages_w = $(".pages").innerWidth();
		move = win_w + pages_w;
		page = 0;
		// $(".pages .page .container").css("margin-right", win_w + "px");
		$(".circle").removeClass("bright");
		if (page < 3) {
			$(".page").css("left", "-" + page * move + "px");
			$(".circle:nth-child(" + (page + 1) + ")").addClass("bright");
		} else {
			page = 0;
			$(".page").css("left", "-" + page * move + "px");
			$(".circle:nth-child(" + page + 1 + ")").addClass("bright");
		}
	});
	// $(".pages .page .container").css("margin-right", win_w + "px");
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

	var lan_en = true;
	var originalHtml = $(".pages").html();
	var chHtml;
	fetch('./assets/pages_ch.txt')
	.then(response => response.text())
	.then(data => {
		chHtml = data;
	});
	$(".languageSwitch").click(function () {
		// win_w = $(window).innerWidth();
		// pages_w = $(".pages").innerWidth();
		// move = win_w + pages_w;
		page = 0;
		$(".circle").removeClass("bright");
		if (page < 3) {
			$(".page").css("left", "-" + page * move + "px");
			$(".circle:nth-child(" + (page + 1) + ")").addClass("bright");
		} else {
			page = 0;
			$(".page").css("left", "-" + page * move + "px");
			$(".circle:nth-child(" + page + 1 + ")").addClass("bright");
		}
		lan_en = !lan_en;
		if (lan_en) {
			console.log("clicked_en");
			$(".languageSwitch .control").removeClass("ch");
			$(".languageSwitch").removeClass("light");
			$(".languageSwitch .control").addClass("en");
			$(".languageSwitch .words_ch").css("opacity", "0");
			$(".languageSwitch .words_en").css("opacity", "1");
			$(".pages").html(originalHtml);
			$(".pages").removeClass("ch");
		} else {
			console.log("clicked_ch");
			$(".languageSwitch").addClass("light");
			$(".languageSwitch .control").removeClass("en");
			$(".languageSwitch .control").addClass("ch");
			$(".languageSwitch .words_en").css("opacity", "0");
			$(".languageSwitch .words_ch").css("opacity", "1");
			$(".pages").html(chHtml);
			$(".pages").addClass("ch");
		}

	});
});

//Language


//ContactCard
$(".contact").click(function () {
	$(".contactCardWrapper").fadeIn();
	setTimeout(function () {
		$(".contactCard").addClass("show");
		setTimeout(function () {
			$(".closeCard").fadeIn();
		}, 1500);
	}, 1000);
});
$(".closeCard").click(function () {
	$(".contactCard").removeClass("show");;
	setTimeout(function () {
		$(".contactCardWrapper").fadeOut();
		$(".closeCard").fadeOut();
	}, 500);
});