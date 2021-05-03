class Rope{
    constructor(bodyA, bodyB , offSetx ,offSety){
        this.offSetx = offSetx ;
        this.offSety = offSety ;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
           // stiffness: 0.04,
           // length: 1 ,
            pointB : {x : this.offSetx , y : this.offSety} 
        }
        this.rope = Constraint.create(options);
       
        World.add(world, this.rope);

    }
   
    display(){
    
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        
        strokeWeight(4);
        stroke("black");
        var anchor1x = pointA.x ;
        var anchor1y = pointA.y ;

        var anchor2x = pointB.x + this.offSetx ;
        var anchor2y = pointB.y + this.offSety ;

        line(anchor1x,anchor1y,anchor2x,anchor2y);
        
        }
    
}