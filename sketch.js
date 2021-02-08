var fixedRect,movingRect;
var rect3,rect4,rect5,rect6;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  rect3=createSprite(400,100,30,80);
  rect4=createSprite(500,100,50,80);
  rect5=createSprite(600,100,50,80);
  rect6=createSprite(700,200,30,80);
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  isTouching(movingRect,rect5);

  drawSprites();
}
