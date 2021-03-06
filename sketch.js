
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob = new Bob(190,400,40);
    bob2 = new Bob(230,400,40);
	bob3 = new Bob(270,400,40);
	bob4 = new Bob(310,400,40);
	bob5 = new Bob(350,400,40);
	roof = new Roof(280,200,200,30)
	rope = new Rope(bob.body,roof.body,-40*2,0);
	rope2 = new Rope(bob2.body,roof.body,-40*1,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,40*1,0);
	rope5 = new Rope(bob5.body,roof.body,40*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
 // drawSprites();
  bob.display(); 
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
 if(keyCode === UP_ARROW){
	 Matter.Body.applyForce(bob.body,bob.body.position,{x : -50 , y : -45});
 }
}



