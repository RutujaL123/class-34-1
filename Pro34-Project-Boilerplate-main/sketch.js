
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicop;
var bg;
var packedfood;
var rescuehelicopter;
var medicine;
var Thundering;



function preload() {
bg = loadImage("/assets/flood.jpg");
packedfood = loadImage("/assets/food.png");
rescuehelicopter = loadImage("/assets/Helicopter.png");
medicine = loadImage("/assets/MEDICINE.png");
Thundering = loadImage("/assets/thundering.png");

}


function setup() {
  createCanvas(1200,600);
  rectMode(CENTER);
  helicop = createSprite(width/2, 200, 10,10);
  //helicop = createSprite(width/2,80,10,10);
  helicop.addImage(rescuehelicopter);
  helicop.scale = 0.2;
  

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  
  background(51);
 
 image(bg, 0,0, width, height);
push();
 imageMode(CENTER);
 pop();

 Engine.update(engine);
  drawSprite();
}

