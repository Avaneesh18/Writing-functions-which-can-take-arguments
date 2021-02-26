
var fixedRect, movingRect,victim;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
  victim = createSprite(200,200,30,50);
  victim.shapeColor ="lightgreen"
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  
}

function draw() {
  background(0,0,0);  
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }

  else if (isTouching(movingRect,victim)){
    movingRect.shapeColor = "red";
    victim.shapeColor = "navy";
  }
  
  else {
    movingRect.shapeColor = "green";
    victim.shapeColor = "blue";
    fixedRect.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}


