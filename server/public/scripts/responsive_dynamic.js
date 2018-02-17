setInterval(function(){
	$(".partniers, .students").css({
		"height":$("body").width()/12.3
	})

	$(".content>div").css({
		"height":$("body").width()/1.5
	});
	$(".Students-Info").css({
		"height":420
	});
	$("#campingCVN, .Campaigns").css({
		"width": $("body").width(),
		"height": $("body").width()/1.9
	});

	$(".Campaigns .title").css("cssText", "height: "+ $("body").width()/6.5+"px !important;padding :"+($("body").width()/17.4)+'px '+($("body").width()/44.3)+'px !important');
	$(".Campaigns .title").css("cssText", );
	$(".Campaigns .title").css({
		"font-size": $("body").width()/39.9+"px"
	});

}, 10);