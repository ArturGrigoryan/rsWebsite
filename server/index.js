var express = require("express"),
	app = express();
var http = require("http");
var socket = require("socket.io").listen(http);
http.createServer(app).listen(3000);
app.use('/*', express.static(__dirname + '/scripts'));
app.use('/*', express.static(__dirname + '/images'));
app.use('/*', express.static(__dirname + '/style'));
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
app.get("/camping", function(req,res){
    console.log("ok");
    res.sendfile(__dirname+"/camping.html");
});
app.get("/", function(req, res){
    res.sendfile(__dirname+"/home.html");
});
app.use("/*/:file", function(req, res) {
  // res.sendfile(__dirname + '\\' + cutString(req.params[0] + "\\" + req.params.file));
    console.log("\n\n"+JSON.stringify(req.params)+"\n\n________________\n\n");
        console.log(cutString(req.params[0] + "\\" + req.params.file));

        if(checkSlash(req.params[0]))
        {
            res.sendfile(__dirname + '\\' + req.params[0] + "\\" + req.params.file);
        }
        else {
            res.sendfile(__dirname + '\\' + cutString(req.params[0] + "\\" + req.params.file));
        }
});
/*app.use("/:file", function(req,res){
    res.sendfile(__dirname + '\\' + req.params[0] + "\\" + req.params.file);
    console.log("///////////\n\n\n\nThis is i am\n\n\n\n///////////");
});*/


