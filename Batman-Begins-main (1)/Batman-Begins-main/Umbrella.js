class Umbrella {
    constructor(x,y){
        var options ={
            isStatic:true
        }

        this.body=Bodies.circle(x,y-70,40,options);
        this.image=loadImage("boy.png");
        World.add(world,this.body);
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x,this.body.position.y+90,300,300);
    }
}