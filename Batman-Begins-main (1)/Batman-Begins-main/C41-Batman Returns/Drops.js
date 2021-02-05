class Drops {
    constructor(x,y){
        var options ={
            isStatic:false,
            friction:0.1
        }
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x,y,2,options);
        World.add(world,this.body);
    }

    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body, {x:random(0, 400) ,y:random(0, 400) })
        }
    }
     

    display(){
        push();
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,5,5);
        pop();
    }
}