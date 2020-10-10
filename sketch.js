const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopter,helicopterImg;
var package,packageImg;
var packageBody,ground,grdBody;
var leftSideB,rightSideB,bottomSideB;

var engine,world;

function preload()
{
	helicopterImg = loadImage("helicopter.png");
	packageImg = loadImage("package.png");
}

function setup()
{
	createCanvas(800,700);

	rectMode(CENTER);

	package = createSprite(width/2,80);
	package.addImage(packageImg);
	package.scale =0.2;

	helicopter = createSprite(width/2,200);
	helicopter.addImage(helicopterImg);
	helicopter.scale = 0.6;

	ground = createSprite(width/2,height-30,width,10);
	ground.shapeColor = color(255);

	engine = Engine.create();
	world = engine.world;

	var package_options = {
		restitution : 0.7,
		isStatic : true
	}

	packageBody = Bodies.circle(width/2,200,5,package_options);
	World.add(world,packageBody);

	grdBody = Bodies.rectangle(width/2,650,width,10,{isStatic:true});
	World.add(world,grdBody);
	
	//Engine.run(engine);

	leftSideB = Bodies.rectangle(230,620,20,100,{isStatic:true});
	World.add(world,leftSideB);

	rightSideB = Bodies.rectangle(450,620,20,100,{isStatic:true});
	World.add(world,rightSideB);

	bottomSideB = Bodies.rectangle(340,660,200,20,{isStatic:true});
	World.add(world,bottomSideB);
}

function draw()
{
	background(0);
	Engine.update(engine);
	rectMode(CENTER);

	package.x = packageBody.position.x;
	package.y = packageBody.position.y;

	fill ("red");
	rect(leftSideB.position.x,leftSideB.position.y,20,100);
	rect(rightSideB.position.x,rightSideB.position.y,20,100);
	rect(bottomSideB.position.x,bottomSideB.position.y,200,20);

	drawSprites();
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   Matter.Body.setStatic(packageBody,false);
	   
	 }
   }