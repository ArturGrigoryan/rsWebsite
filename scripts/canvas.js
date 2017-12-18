var stage = new createjs.Stage('campingCVN');
var shape = new createjs.Shape();
var gr = new createjs.Graphics();
shape.graphics.beginStroke("teal").arc(100, 100, 50, 0, Math.PI*2);
stage.addChild(shape);
shape.x = stage.canvas.width/2-100;
shape.y = stage.canvas.height/2-100;
var shape2 = new createjs.Shape();
shape2.graphics.beginStroke("teal").arc(100, 100, 250, 0, Math.PI*2);
shape2.x=stage.canvas.width/2-100;
shape2.y=stage.canvas.height/2-100;
stage.addChild(shape2);
stage.update();
shape3 = new createjs.Shape();
for(var a = 0, round = 250; a <= 10; a++, round-=50)
{
    console.log(round)
    shape3.graphics.beginStroke("teal").arc(shape2.x+100, shape2.y+round+100, 10, 0, Math.PI*2);
    console.log(shape3.regX)

}
stage.addChild(shape3);
stage.update();