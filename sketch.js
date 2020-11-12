
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var canvasmouse, Mouse;

function preload()
{
	
}

function setup() {
	canvas = createCanvas(windowWidth/2, windowHeight/1.5);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasmouse
	}
	mConstraint = mouseConstraint.create(engine, options);
	World.add(world, mConstraint)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY})
}


