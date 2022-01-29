var grass;
var GOimg,GO;
var backgroundimg;
var road;
var line,line1,line2,line3,line4;
var user,user1;
var computer,computerimg,computer1,computer3;
var cargroup;
var w=screen.width;
var h=screen.height;
var gamestate="start";
var reset2,resetimg
var start,startimg;
function preload() {
  grass=loadImage("grass.jpeg");
  user=loadImage("user.png");
  computerimg=loadImage("computer.png")
  GOimg=loadImage("gameOver.png")
  resetimg=loadImage("reset2.png")
  startimg=loadImage("start.png")
}

function setup() {
createCanvas(w,h);
text(w,10,10);

road=createSprite(1100,500,1000,1000)
road.shapeColor="#302f2e";
line=createSprite(1100,100,20,100);
line.shapeColor="white";

line1=createSprite(1100,300,20,100);
line1.shapeColor="white";

line2=createSprite(1100,500,20,100);
line2.shapeColor="white";

line3=createSprite(1100,700,20,100);
line3.shapeColor="white";

line4=createSprite(1100,900,20,100);
line4.shapeColor="white";

user1=createSprite(1100,800,50,200)
user1.addImage("user",user)



cargroup=new Group()
}

function draw() {
  background("grass");
  computerimg.resize(180,250);
  user.resize(250,250);

  if (gamestate==="play") {
  cars();
  cars1();
  }
  if (keyDown("right_arrow")) {
    user1.x=user1.x+3
  }
  if (keyDown("left_arrow")) {
    user1.x=user1.x+-3
  }
  if (cargroup.isTouching(user1)) {
    user1.destroy();
    gamestate="end";
  }
  if (gamestate==="end") {
    GO=createSprite(1100,400);
    GO.addImage("go",GOimg);
    reset2=createSprite(1100,500)
    reset2.addImage("reset",resetimg)
 }
 if (gamestate==="start") {
  start=createSprite(1100,800,50,200)
  start.addImage("start",startimg)
 }
 if (mousePressedover(start)) {
   gamestate="play"
 }
  drawSprites();
}
function cars() {
  if (frameCount%50===0) {
    computer=createSprite(1000,-50)
    computer.x=Math.round(random(1000,1400))
    computer.addImage(computerimg);
    computer.velocityY=8
    computer.setCollider("rectangle",0,0,40);
    computer.debug=true;
    computer.lifetime=1000;
    cargroup.add(computer)
  }
}
function cars1() {
  if (frameCount%70===0) {
    computer1=createSprite(700,0)
    computer1.x=Math.round(random(600,900))
    computer1.addImage(computerimg);
    computer1.setCollider("circle",0,0,45);
    computer1.debug=false;
    computer1.velocityY=8
    computer1.lifetime=1000;
    cargroup.add(computer1)
  }
}