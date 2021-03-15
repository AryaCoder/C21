var fixedRect, movingRect;
var gameObject;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX=4
  gameObject = createSprite(900,200,80,30);
  gameObject.shapeColor = "green";
  gameObject.debug = true;
  gameObject.velocityX=-4
}

function draw() {
  background(0,0,0);  
 

bounceOff(movingRect,gameObject)
  
  drawSprites();
}

function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2)
    {
     
      object1.velocityX=object1.velocityX*(-1)
      object2.velocityX=object2.velocityX*(-1)
}
 if(  object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY=object1.velocityY*(-1)
      object2.velocityY=object2.velocityY*(-1)
  }

}