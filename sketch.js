var RunnerImg, pathImg, path, Runner, left_boundary, right_boundary, coin, coinImg,bomb,bombImg,energyDrinkImg,energyDrinkImg;
function preload(){
 
  RunnerImg=loadAnimation("Runner-1.png","Runner-2.png");
  pathImg=loadImage("path.png");
  coinImg=loadImage("coin.png");
  powerImg=loadImage("power.png");
  energyDrinkImg=loadImage("energyDrink.png");
  bombImg=loadImage("bomb.png");
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=5;
  path.y=path.height/30;

  Runner=createSprite(180,340,50,170);
  Runner.addAnimation("running", RunnerImg);
  Runner.scale = 0.06;
 
  coin=createSprite(200,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3

  coin=createSprite(100,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3

  coin=createSprite(300,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3;

  power=createSprite(200,105,200,100);
  power.addImage(powerImg);
  power.scale=0.2;

  energyDrink=createSprite(100,105,80,90);
  energyDrink.addImage(energyDrinkImg);
  energyDrink.scale=0.1;

  energyDrink=createSprite(300,105,80,90);
  energyDrink.addImage(energyDrinkImg);
  energyDrink.scale=0.1;

bomb=createSprite(200,30,80,90);
bomb.addImage(bombImg);
bomb.scale=0.1;

bomb=createSprite(100,30,80,90);
bomb.addImage(bombImg);
bomb.scale=0.1;

  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
 left_boundary.visible=false;
right_boundary.visible=false;
}

function draw() {
  background(0);
 
  path.velocityY=5;
  Runner.x=World.mouseX;
  if(path.y>400) {
  path.y=height/2 ; 
 
}
  Runner.collide(left_boundary);
  Runner.collide(right_boundary);
  edges=createEdgeSprites();
  Runner.collide(edges[3]);
drawSprites();
}

