var box1 , box2 ;

function setup() {
  createCanvas(800,400);
  box1 = createSprite(400, 200, 65, 75);
  box1.shapeColor="green";
  box2 = createSprite(300, 200, 65, 85);
  box2.shapeColor="green";
  
  box1.debug = true;
  box2.debug = true;

  
}

function draw() {
  background(0);  
  fill("white");
  text (box1.x, 100,20);
  text (box2.x, 150,20);
  if(box1.x-box2.x<box1.width/2+box2.width/2
    && box2.x - box1.x< box1.width/2 + box2.width/2
    && box1.y-box2.y<box1.height/2+box2.height/2
    &&box2.y-box1.y<box2.height/2+box1.height/2){
    box1.shapeColor="red";
    box2.shapeColor="red";
  }
  else{
    box1.shapeColor="green";
    box2.shapeColor="green";
  }
  drawSprites();
  box2.x=mouseX;
  box2.y=mouseY;
}