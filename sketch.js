
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paperObj;
var world;
var officeBackgroundImg;


function preload(){
	officeBackgroundImg=loadImage("OFFICE-img.jpg")
}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	console.log(officeBackgroundImg)

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObj=new paper(20,200,50)
	Engine.run(engine);
  
}


function draw() {
	background(officeBackgroundImg)
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObj.display();

  

}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:300,y:-385})
	}
}

