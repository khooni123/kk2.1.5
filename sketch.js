var track,runner
track = createSprite(200,200);
track.addImage("path.png");;
runner = createSprite(mouseX,200,20,20);
runner.addImage("runner-1.png");

function preload(){
  //pre-load images
}

function setup(){
  createCanvas(400,400);
  //create sprites here
}

function draw() {
  background(0);

  path.velocityY = 4;
  path.scale=1.2;
  
  if(path.y > 400){
    path.y = hieght/2;
  }
}
