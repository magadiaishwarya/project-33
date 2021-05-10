var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var count=0;
var gamestate= "start";
var ball;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 25; j <=width-20; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }
  //create 4th row of plinko objects
  for (var j = 0; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,375));
  }
  //create particle objects
  
    
}
 


function draw() {
  background("black");
  textSize(35)
  fill("white");
  text("score: "+score ,650,30)
 
  text(" 500 ",5,550);
  text(" 500 ",80,550);
  text(" 500 ",160,550);
  text(" 200 ",240,550);
  text(" 200 ",320,550);
  text(" 200 ",400,550);
  text(" 100 ",480,550);
  text(" 100 ",560,550);
  text(" 100 ",640,550);
  text(" 100 ",720,550);
  Engine.update(engine);
  ground.display();
  
  

  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
if (ball!=null){
  ball.display();
  if(ball.body.position.y>760){
    if(ball.body.position.x<240){
      score=score+500;
      ball=null;
      if(count>=5){
        gamestate="end";
      }
    }
    else if(ball.body.position.x>240 && ball.body.position.x<560){
      score=score+200;
      ball=null;
      if(count>=5){
        gamestate="end";
      }
    } 
    else if(ball.body.position.x>560 && ball.body.position.x<800){
      score=score+100;
      ball=null;
      if(count>=5){
        gamestate="end";
      }
    }  
  }
}
 if(gamestate==="end"){
   textSize(100);
  text("gameover",300,200);
  } 

  
}
function mousePressed(){
  if(gamestate!=="end"){
    count++;
    ball= new Particles(mouseX,10,10);
  }
}