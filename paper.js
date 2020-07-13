class Paper
{
    constructor(x,y,width,height)
    {
        var options=
        {
            isStatic:false,
            //restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.Body=Matter.Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.Body)
        this.width=width;
        this.height=height;
        this.image=loadImage("paper.png");
    }
    display()
    {
        var pos=this.Body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.Body.angle);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}