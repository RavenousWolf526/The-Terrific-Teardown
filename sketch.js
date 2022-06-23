
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
const Constraint = Matter.Constraint;

var b1, b2, b3, b4, b5, b6;
var mb1, mb2, mb3;
var rp1, rp2;
var ip1, ip2, ip3;

var cb1, cb2;

var title, titleImg;
var logo, logoImg;

var rope1, link1, wball;

function preload() {
  titleImg = loadImage("TheTerrificTeardownTitle.png");
  logoImg = loadImage("Logo.png")
}

function setup() {
  createCanvas(800, 500);

  //Title
  // title = createSprite(width / 2, height / 2);
  // title.addImage(titleImg);
  // title.scale = 0.8;

  //Logo
  // logo = createSprite(width / 2, height / 2);
  // logo.addImage(logoImg);
  // logo.scale = 0.8;

  engine = Engine.create();
  world = engine.world;

  /*vertical walls and bricks*/

  //left bricks
  b1 = new Brick(500, 470, 70, 100)
  b3 = new Brick(500, 370, 50, 100)
  b5 = new Brick(500, 270, 50, 100)

  //right bricks
  b2 = new Brick(700, 470, 70, 100)
  b4 = new Brick(700, 370, 50, 100)
  b6 = new Brick(700, 270, 50, 100)

  //middle pieces
  fill("teal")
  stroke("silver")
  strokeWeight(3)
  mb1 = new Brick(600, 420, 150, 50)
  mb2 = new Brick(550, 220, 100, 30)
  mb3 = new Brick(650, 220, 100, 30)


  //inner pillars
  ip1 = new Brick(600, 315, 20, 160)
  ip2 = new Brick(550, 315, 20, 160)
  ip3 = new Brick(650, 315, 20, 160)

  //roof pieces
  rp1 = new Brick(600, 190, 80, 25)
  rp2 = new Brick(600, 150, 20, 50)

  rope1 = new Rope(10, { x: 200, y: 50 })
  var wballoptions = { density: 0.0009 }

  wball = Bodies.circle(100, 100, 20, wballoptions)
  Matter.Composite.add(rope1.body, wball);
  link1 = new Link(rope1, wball);

  console.log(wball)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background(51);
  //display middle pieces
  mb1.display()
  mb2.display()
  mb3.display()
  //display inner pillars
  ip1.display()
  ip2.display()
  ip3.display()
  //display roof pieces
  rp1.display()
  rp2.display()
  //display bricks
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  //display rope
  rope1.display()

  fill("#43464B")
  ellipseMode(RADIUS)
  ellipse(wball.position.x, wball.position.y, 30, 30)

  //credits
  textSize(15)
  textFont("Consolas")
  fill("teal")
  stroke("white")
  strokeWeight(2)
  text("Created by TheRavenousWolf526", width / 15, 20)

  Engine.update(engine);



}

function ballswing() {
  Matter.Body.applyForce(wball, { x: 0, y: 0 }, { x: 0.05, y: -0.01 })

}


function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
    ballswing()
    console.log("It's Working!")
  }

  function keyPressed() {
    if (keyIsDown(DOWN_ARROW)) {
      detach()
      console.log("BYE!")
    }
  }

}