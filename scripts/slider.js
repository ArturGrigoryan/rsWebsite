function slide(imgs)
{
	imgId = 0;
	for(var a = 0; a < imgs.length; a++)
	{
		$(".pages-div").append("<div id='div"+a+"' class='pgInnDiv'></div>");
	}
	$(".pages-div").width(imgs.length*32);
	setInterval(function(){
		$(".home .bigImage").css("background", "url(images/slider/"+imgs[imgId]+")");
		$(".pages-div div").css("background", "white");
		$(".pages-div #div"+imgId).css("background", "radial-gradient(circle, #8a8a8a 20%, transparent 20%), linear-gradient(to right, white, white)");
		if(imgId == imgs.length-1)
			imgId = 0;
		else
			imgId++;
	},5000);
	$(".pgInnDiv").click(function(){
		imgId = parseInt(this.id.split("div")[1]);
		$(".home .bigImage").css("background", "url(images/slider/"+imgs[imgId]+")");
		$(".pages-div div").css("background", "white");
		$(".pages #div"+imgId).css("background", "radial-gradient(circle, #8a8a8a 20%, transparent 20%), linear-gradient(to right, white, white)");
	});
	$(".home .left").click(function(){
		console.log(imgId);
		if(imgId > 0)
		{
			imgId--;
			$(".home .bigImage").css("background", "url(images/slider/"+imgs[imgId]+")");
			$(".pages-div div").css("background", "white");
			$(".pages #div"+imgId).css("background", "radial-gradient(circle, #8a8a8a 20%, transparent 20%), linear-gradient(to right, white, white)");
		}
		else if(imgId <= 0)
		{
			imgId = imgs.length-1;
			$(".home .bigImage").css("background", "url(images/slider/"+imgs[imgId]+")");
			$(".pages-div div").css("background", "white");
			$(".pages #div"+imgId).css("background", "radial-gradient(circle, #8a8a8a 20%, transparent 20%), linear-gradient(to right, white, white)");
		}
	});
	$(".home .right").click(function(){
		if(imgId < imgs.length-1)
		{
			imgId++;
			$(".home .bigImage").css("background", "url(images/slider/"+imgs[imgId-1]+")");
			$(".pages-div div").css("background", "white");
			$(".pages #div"+(imgId-1)).css("background", "radial-gradient(circle, #8a8a8a 20%, transparent 20%), linear-gradient(to right, white, white)");
		}
		else if(imgId > imgs.length-1)
		{
			imgId = 0;
			$(".home .bigImage").css("background", "url(images/slider/"+imgs[imgId]+")");
			$(".pages-div div").css("background", "white");
			$(".pages #div"+imgId).css("background", "radial-gradient(circle, #8a8a8a 20%, transparent 20%), linear-gradient(to right, white, white)");
		}
	});
}