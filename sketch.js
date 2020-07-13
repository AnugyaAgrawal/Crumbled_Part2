var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	  Ground1=new Ground(200,300,1000,50);
	  Paper1=new Paper(200,75,30,30);
	Dustbin1= new Dustbin(450,175,50,100);
	//Dustbin2 = new Dustbin(475,265,100,20);
     //Dustbin3 = new Dustbin(510,225,50,100);
	

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Ground1.display();
  Paper1.display();
  Dustbin1.display();
  //Dustbin2.display();
  //Dustbin3.display();
  if(keyDown(UP_ARROW))
  {
	Matter.Body.applyForce(Paper1.Body,Paper1.Body.position,{x:75,y:-35})

  }
  drawSprites();
 
}



