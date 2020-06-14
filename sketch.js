//create the variables
var sun;
var mercury;
var venus;
var earth;
var mars;

function setup() {

//set up the canvas
createCanvas(800,600);

//create the sprites
sun =  createSprite(390, 300, 100, 100);
sun.shapeColor = "yellow";

mercury = createSprite(90,100,100,100);
mercury.shapeColor = "red";

venus = createSprite(100,500,100,100);
venus.shapeColor = "blue";

earth = createSprite(700,500,100,100);
earth.shapeColor = "green";

mars = createSprite(700,100,100,100);
mars.shapeColor = "brown";

}

function draw() {
//make the background black
background("black");  

//increase of the size of the sun at every few frames
if(frameCount%30 === 0){
sun.width = sun.width+100;
sun.height = sun.height+100;
}

//destroy the planets if they are touched by the sun
if(isTouching(sun,mars)){
mars.destroy();
}
else {
mars.visible = true;
}

if(isTouching(sun,venus)){
venus.destroy();
}
else {
venus.visible = true;
}

if(isTouching(sun,earth)){
earth.destroy();
}
else {
earth.visible = true;
}

if(isTouching(sun,mercury)){
mercury.destroy();
}
else {
mercury.visible = true;
}

//display all the game objects
drawSprites();
}












