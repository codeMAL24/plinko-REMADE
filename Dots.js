class Plinko{
    constructor(x, y) {
        var options = {
            'isStatic':true
        }
        this.radius=10;
        this.body = Bodies.circle(x, y,this.radius,options);
        World.add(world, this.body);
      }
      display(){
        push();
        fill("white")
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y, this.radius,this.radius);
        pop();
    }
}