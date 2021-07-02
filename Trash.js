
class Trash
{
    constructor(x,y,r)
    {
       var options= {
           restitution:0.3,
           friction:1,
           density:1.2
       }
       this.x=x
       this.y=y
       this.r=r
       this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options)
       this.image=loadImage("paper.png")
       
    }

    display()
    {
       var paperpos = this.body.position
       push()
       translate(paperpos.x,paperpos.y)
       imageMode(CENTER)
       image(this.image,0,0,this.r,this.r)
       pop() 
    }
}