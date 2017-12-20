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
stage.update();
var shape3 = new createjs.Shape();
for(var a = 250; a > 0; a-=100)
{
    shape3.graphics.beginStroke("teal").arc(Math.sqrt((250*250)-(a*a))+shape2.x+100, (250-a)+135, 50, 0, Math.PI*2);
    stage.addChild(shape3);
    stage.update();
}
for(var a = 250; a > 0; a-=100)
{
    shape3.graphics.beginStroke("teal").arc(Math.sqrt((250*250)-(a*a))+shape2.x+100, a+100+shape2.y, 50, 0, Math.PI*2);
    stage.addChild(shape3);
    stage.update();
}
for(var a = 250; a > 0; a-=100)
{
    shape3.graphics.beginStroke("teal").arc((Math.sqrt((250*250)-(a*a))*-1)+shape2.x+100, (250-a)+135, 50, 0, Math.PI*2);
    stage.addChild(shape3);
    stage.update();
}

for(var a = 250; a > 0; a-=100)
{
    shape3.graphics.beginStroke("teal").arc((Math.sqrt((250*250)-(a*a))*-1)+shape2.x+100, a+100+shape2.y, 50, 0, Math.PI*2);
    stage.addChild(shape3);
    stage.update();
}
setTimeout(function(){
    var bitmap = new createjs.Bitmap("images/slider/5.jpg");
    stage.addChild(bitmap);
    stage.update();
    for(var a = 250; a > 0; a-=100)
    {
        shape3.graphics.beginStroke("teal").arc(Math.sqrt((250*250)-(a*a))+shape2.x+100, (250-a)+135, 50, 0, Math.PI*2);
        stage.addChild(shape3);
        stage.update();
    }
    for(var a = 250; a > 0; a-=100)
    {
        shape3.graphics.beginStroke("teal").arc(Math.sqrt((250*250)-(a*a))+shape2.x+100, a+100+shape2.y, 50, 0, Math.PI*2);
        stage.addChild(shape3);
        stage.update();
    }
    for(var a = 250; a > 0; a-=100)
    {
        shape3.graphics.beginStroke("teal").arc((Math.sqrt((250*250)-(a*a))*-1)+shape2.x+100, (250-a)+135, 50, 0, Math.PI*2);
        stage.addChild(shape3);
        stage.update();
    }

    for(var a = 250; a > 0; a-=100)
    {
        shape3.graphics.beginStroke("teal").arc((Math.sqrt((250*250)-(a*a))*-1)+shape2.x+100, a+100+shape2.y, 50, 0, Math.PI*2);
        stage.addChild(shape3);
        stage.update();
    }
},4500);
