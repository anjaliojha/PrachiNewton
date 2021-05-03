class Roof{
    constructor(x,y,width,height){
        var option = {
          isStatic: true 
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.height = height;
        this.width = width;
        World.add(world,this.body);
        
    }
    display(){
        
        var pos = this.body.position ;
        push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
            strokeWeight(4);
            stroke("black")
			fill("grey")
			rect(0,0,this.width, this.height);
            pop();
			
    }
}