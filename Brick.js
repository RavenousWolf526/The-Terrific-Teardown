class Brick {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.options = {
      restitution: 0.5,
      density: 0.8,
      friction: 0.8,
      isStatic: false
    }
    this.body = Bodies.rectangle(x, y, width, height, this.options);
    World.add(world, this.body)
  }
  display() {
    push()
    translate(this.x, this.y)
    rotate(this.body.angle)
    //  imageMode(CENTER)
    //  image(this.canon,0,0,this.width, this.height)
    rectMode(CENTER)
    rect(0, 0, this.width, this.height)
    pop()
  }
}  