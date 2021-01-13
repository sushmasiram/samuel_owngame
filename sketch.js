const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var score = 0;
function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;
  Bground = new Ground( width/2,height-50,100,10)
  Lground = new Ground(width/2-50,height-80,10,60)
  Rground = new Ground(width/2 + 50,height-80,10,60)
  
}
function draw() {
 Engine.update(engine)
  background(255,255,255);  
  if(frameCount % 10 === 0){
    particles.push(new Particle(random(50,750),10))
  }
  textSize(30)
  text("score "+ score, 30,30 )

  
  for(var p in particles){
   particles[p].display()
   if(particles[p].speed > 1){
     score = score + 1
   }  
  
  }


  if(keyIsDown(LEFT_ARROW)){
    Bground.body.position.x = Bground.body.position.x - 5
    Lground.body.position.x = Lground.body.position.x - 5
    Rground.body.position.x = Rground.body.position.x - 5
  }
  if(keyIsDown(RIGHT_ARROW)){
    Bground.body.position.x = Bground.body.position.x + 5
    Lground.body.position.x = Lground.body.position.x + 5
    Rground.body.position.x = Rground.body.position.x + 5 
  }
 
  Bground.display()
  Lground.display()
  Rground.display()
}




