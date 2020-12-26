//define all the variables here
var button,tom,jerry;
var level;




function setup() {
  createCanvas(1000,500);
  level="level1";
  button=createSprite(200,200,20,20);
//button.visible=false;

  jerry=createSprite(400,100,20,40);
  jerry.visible=false;

}

function draw() {
  background(255,255,255);  

  text(mouseX+ "," +mouseY,mouseX,mouseY);

  if(mousePressedOver(button))
{
  level="level2";

}
if(level==="level2"){
  button.visible=false
jerry.visible=true;
}

  drawSprites();
}