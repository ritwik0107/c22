const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
var c1={
    restitution:0
}
    ground = Bodies.rectangle(200,380,200,20,ground_options);
    World.add(world,ground);
     circle1=Bodies.circle(200,20,50,c1)
    console.log(ground);
    World.add(world,circle1);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipse(circle1.position.x,circle1.position.y,50,50);

}