class Ground
{
    constructor(x,y,width,height)
    {
        var options=
        {
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.Body=Matter.Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.Body)
        this.width=width;
        this.height=height;
    }
    display()
    {
        var pos=this.Body.position;
        rect(pos.x,pos.y,this.width,this.height);
    }
    }