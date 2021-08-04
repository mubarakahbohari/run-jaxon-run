var path,pathImage,runner,Runner1Image

function preload(){
  //pre-load images
  pathImage=loadImage("path.png")
  runnerImage=loadAnimation("runner-1.png","runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite(200,200)
path.addImage(pathImage)
path.VelocityY=4
path.scale=1.2
invisibleboundary1=createSprite(373,200,0,400)
invisibleboundary1.visible=false
invisibleboundary2=createSprite(20,200,0,400)
invisibleboundary2.visible=false
runner=createSprite(200,200,10,10)
runner.addAnimation("runner",runnerImage)
runner.scale=0.1
}

function draw() {
  background("black");
if(keyDown("left")){
  runner.X=runner.X-10
}
if(keyDown("right")){
  runner.X=runner.X-10
}
runner.collide(invisibleboundary1)
runner.collide(invisibleboundary2)
if(path.y>400){
  path.y=height/2
}
drawSprites();
}
