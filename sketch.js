//namespacing is a process in which we can give a nick name

const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var SEngine , SWorld, ground, ball

function setup() {

    createCanvas(600,600)

    SEngine = Engine.create() //creating the engine

    SWorld = SEngine.world

    var prop = { isStatic : true }

    ground = Bodies.rectangle(300,580,600,30, prop)
    World.add( SWorld , ground) //adding the body to the engine's world

    console.log(ground)

    var propball = { restitution : 1 }
    ball = Bodies.circle(300,100,30 , propball) //creating the body [aatmaa/soul]
    World.add( SWorld , ball)
    console.log(ball)


}

function draw() 
{
  background("black")

  Engine.update(SEngine)

  rectMode(CENTER)
  rect(ground.position.x , ground.position.y , 600,30)

  ellipseMode(RADIUS)
  ellipse(ball.position.x , ball.position.y , 30,30)

}

