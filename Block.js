class Block {
    constructor(x,y,width,height) {
      var options={
        restitution:0.2        
      }
      
      this.width = width
      this.height = height
      this.body=Bodies.rectangle(x,y,width,height,options);
    
    World.add(world,this.body)
    }
    
    display(){
      var pose=this.body.position;
      var angle=this.body.angle;
      push();
      translate(pose.x, pose.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };