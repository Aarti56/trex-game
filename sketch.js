
var trex ,trex_running;
var ground, invisibleGround, groundImage;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,100,20,50);
  //Adding animation to trex
  trex.addAnimation("running",trex_running);
  //adding scale and position to trex 
  trex.scale = 0.5;
  trex.x = 50
   //create Ground
  ground=createSprite(200,100,400,20);
   
}

function draw(){
  background("white")

  //jumping the trex on space key press 
  if(keyDown("space")) {
     trex.velocityY = -10;
     }

     trex.velocityY = trex.velocityY + 0.6
  //stop trex from falling down
   trex.collide(ground);
  drawSprites();

}
