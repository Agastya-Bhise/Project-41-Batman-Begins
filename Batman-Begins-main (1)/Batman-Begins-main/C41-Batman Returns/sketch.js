const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;

var engine, world;
var drops=[];
var sky
function preload(){
    thunderImage=loadImage("thunder.png");
}

function setup(){
   createCanvas(400, 600);
   engine=Engine.create();
   world=engine.world;


   man=new Umbrella(200,450);

   var maxDrops=100;
   for(var i=0; i<maxDrops; i++){
       drops.push(new Drops(random(0, 400), random(0,400)));
   }

}

function draw(){
    Engine.update(engine);
    background(0);
    man.display();

   

   for(var i=0; i<drops.length; i++){
    drops[i].display();
    drops[i].update();
   }

   
   
   if(frameCount%300===0){
        sky=createSprite(100,50)
        sky.addImage(thunderImage);
        sky.lifetime=300;
        drawSprites();
   }


}   


