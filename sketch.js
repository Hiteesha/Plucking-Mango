
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
const Render = Matter.Render

var launchingForce = 100
 
var boy;
var boyImg
var mango=[]

function preload()
{
	boyImg = loadImage("images/boy.png")
}

function setup() {
	createCanvas(1300,600);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  var boy = createSprite(250,520,100,200)
  boy.addImage("boy",boyImg)
  boy.scale = 0.1


	ground = new Ground(650,580,1300,20)
  tree = new Tree(1050,580)


  stone = new Stone(400,500,20)
  mango1 = new Mango(1100,100,30)
  mango2 = new Mango(1170,130,40)
  mango3 = new Mango(1010,110,30)
  mango4 = new Mango(1060,170,40)
  mango5 = new Mango(900,240,30)
  mango6 = new Mango(1140,280,40)
  mango7 = new Mango(1000,150,30)
  mango8 = new Mango(1010,220,40)
  mango9 = new Mango(1100,250,30)
  mango10 = new Mango(1200,190,40)
  mango11 = new Mango(1070,60,30)
  mango12 = new Mango(1090,210,40)

  launcherObject = new Launcher(stone.body,{x:200,y:460})

  var render = Render.create({
    element:document.body,
    engine:engine,
    options:{width:1300,height:600,wireframes:false}
  
  })
    

  
  
//Render.run(render)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  launcherObject.display();
  stone.display();
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  
  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  launcherObject.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:235,y:420}) 
    launcherObject.attach(stone.body);
  }
}
 
function detectCollision(Lstone,Lmango){
  mangobodyposition = Lmango.body.position
  stonebodyposition = Lstone.body.position

  var distance = dist(stonebodyposition.x,stonebodyposition.y,mangobodyposition.x,mangobodyposition.y)
  if(distance<= Lmango.r+Lstone.r){
    Matter.Body.setStatic(Lmango.body,false)
  }
}





