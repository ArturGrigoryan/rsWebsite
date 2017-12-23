var express = require("express"),
	app = express();
var http = require("http");
var socket = require("socket.io").listen(http);
http.createServer(app).listen(3000);
app.use('/*', express.static(__dirname + '/scripts'));
app.use('/*', express.static(__dirname + '/style'));
app.use('/*', express.static(__dirname + '/images'));
//app.use("/", express.static(__dirname+"/canvas.js"));
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
app.use("/:file", function(req, res){
	res.sendfile(__dirname+'\\'+req.params.file+replaceSlash(req.url));
replaceSlash(req.url);
	console.log(__dirname+'\\'+req.params.file+replaceSlash(req.url));
});
app.get("/", function(req, res){
	res.sendfile(__dirname+"/home.html");
});