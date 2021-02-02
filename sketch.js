var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload (){



}

function setup (){
    createCanvas(1000,700)
    engine = Engine.create();
    world = engine.world;
    
    ground = new Road(500,400,800,20);


}

function draw (){

ground.display();

}