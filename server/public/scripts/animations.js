var classNames = [".Students-Info", ".About", ".Lectures", ".Campaigns", ".Contact"];
var offsetTopParam = [];
for(var a = 0; a < classNames.length; a++)
{
	offsetTopParam.push($(classNames[a])[0].offsetTop-800);
	$(classNames[a]).fadeOut();
}
for (var a = 0; a < offsetTopParam.length; a++) {
	for(var b = 0; b < offsetTopParam.length; b++)
	{
		if(offsetTopParam[b] > offsetTopParam[b+1])
		{
			lastClass = classNames[b+1];
			classNames[b+1] = classNames[b];
			classNames[b] = lastClass;
			lastNb = offsetTopParam[b+1];
			offsetTopParam[b+1] = offsetTopParam[b];
			offsetTopParam[b] = lastNb;
		}
	}
}
setInterval(function(){
	for(var a = 0; a < offsetTopParam.length; a++)
	{
		if($("body").scrollTop() >= offsetTopParam[a])
		{
			$(classNames[a]).fadeIn(3000);
		}
	}
},100);