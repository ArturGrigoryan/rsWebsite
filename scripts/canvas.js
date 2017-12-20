var stage = new createjs.Stage('campingCVN');
var shape = new createjs.Shape();
var gr = new createjs.Graphics();
shape.graphics.beginStroke("white").arc(100, 100, 50, 0, Math.PI*2);
stage.addChild(shape);
shape.x = stage.canvas.width/2-100;
shape.y = stage.canvas.height/2-100;
var shape2 = new createjs.Shape();
shape2.graphics.beginStroke("white").arc(100, 100, 250, 0, Math.PI*2);
shape2.x=stage.canvas.width/2-100;
shape2.y=stage.canvas.height/2-100;
stage.addChild(shape2);
var shape3 = new createjs.Shape();
function createImg(x, y)
{
        var container = new createjs.Container();

        var bitmap = new createjs.Bitmap("images/slider/5.jpg");
        bitmap.regX = bitmap.regY = 0;
        bitmap.y = bitmap.x = 0;
        bitmap.scaleX = bitmap.scaleY = 0.03;
        var maskShape = new createjs.Shape();
        maskShape.graphics.drawCircle(50,50,50);
        bitmap.mask = maskShape;

        container.addChild(bitmap);

        stage.addChild(container);

        container.x =x,
            container.y = y;
}
$("#canvasCVN").ready(function () {
    var bitmap = new createjs.Bitmap("images/slider/5.jpg");
    stage.addChild(bitmap);
    for(var a = 250; a > 0; a-=100)
    {
        createImg(Math.sqrt((250*250)-(a*a))+shape2.x+50, (250-a)+85);
    }
    for(var a = 250; a > 0; a-=100)
    {
        createImg(Math.sqrt((250*250)-(a*a))+shape2.x+50, a+50+shape2.y);
    }
    for(var a = 250; a > 0; a-=100)
    {
        createImg((Math.sqrt((250*250)-(a*a))*-1)+shape2.x+50, (250-a)+85);
    }

    for(var a = 250; a > 0; a-=100)
    {
        createImg((Math.sqrt((250*250)-(a*a))*-1)+shape2.x+50, a+50+shape2.y);
    }
});
setInterval(function(){stage.update()},10);