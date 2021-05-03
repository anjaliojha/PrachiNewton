class Bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:0.8

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
	  // this.image = loadImage("sprites/paper.png");
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
		    ellipseMode(CENTER)
			//strokeWeight(3);
		  	fill("pink")
		    ellipse(0,0,this.r, this.r);
			//imageMode(CENTER);
			//image(this.image,0,0,this.r,this.r);
			pop()
			
	}

}
  