var express = require("express"),
	app = express();
var http = require("http");
//var socket = require("socket.io").listen(http);
http.createServer(app).listen(3000);
app.use("/home", express.static(__dirname+"/public"));
app.get("/home/camping", function(req,res){
    console.log("ok");
    res.sendfile(__dirname+"/public/html/camping.html");
});
app.get("/home/students", function(req,res){
    console.log("ok");
    res.sendfile(__dirname+"/public/html/students.html");
});
app.get("/home", function(req, res){
    res.sendfile(__dirname+"/public/html/home.html");
});
app.get("/:file", function (req ,res) {
    console.log(req.params);
    res.sendfile(__dirname+"/"+req.params.file);
});
function replaceSlash(str)
{
	var regexp = /[/]/gi;
	var matches_array = str.match(regexp);
	for(var a = 0; a < matches_array.length; a++)
	{
		str = str.replace("/", "\\");
	}
	return str;
}
function cutString(str)
{
    for(var a = 0; a < str.length; a++)
    {
        tStr = str.slice(a,a+1);
        if(tStr == "/")
        {
            str = str.slice(a+1, str.length);
            break;
        }
    }
    return str;
}
function checkSlash(str)
{
    var bool = false;
    for(var a = 0; a < str.length; a++)
    {
        tStr = str.slice(a,a+1);
        if(tStr == "/")
        {
            bool = true;
            break;
        }
    }
    return bool;
}


