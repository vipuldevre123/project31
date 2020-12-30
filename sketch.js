const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,10);
  for(var k = 0; k<= width; k = k+80){
    divisions.push(new Division(k,650,10,300))
  }
  for(var k = 75; k<= width; k = k+50){
    plinkos.push(new Plinko(k,75))
  }
  for(var k = 10; k<= width; k = k+50){
    plinkos.push(new Plinko(k,175))
  }
  for(var k = 75; k<= width; k = k+50){
    plinkos.push(new Plinko(k,275))
  }
  for(var k = 10; k<= width; k = k+50){
    plinkos.push(new Plinko(k,375))
  }


}

function draw() {
  background(0);  
  Engine.update(engine);

  if(frameCount % 30 === 0){
    particles.push(new Particle(random(width/2-30, width/2+30),10,10))
  }
  for(var j = 0; j<particles.length; j++){
    particles[j].display();
  }
  for(var p = 0; p<divisions.length; p++){
    divisions[p].display();

    for(var i = 0;i<plinkos.length; i++){
      plinkos[i].display();
    }
    
  }
  drawSprites();
}