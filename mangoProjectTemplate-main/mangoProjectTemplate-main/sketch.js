const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,stone1;
var world,boy,mangos,stones,trees, chain;

function preload(){
	boy=loadImage("images/boy.png");
	mangos=loadImage("images/mango.png");
	stones=loadImage("images/stone.png");
	trees=loadImage("images/tree.png");

  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,100,30);
	mango2=new Mango(1000,95,30);
	mango3=new Mango(900,180,30);
	mango4=new Mango(1200,170,30);
	mango5=new Mango(1050,200,30);

	stone1=new Stone(240, 400, 30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

	// chain = new Chain(stone1.body, treeObj.body);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  stone1.display();

  groundObject.display();
  chain.display();
}