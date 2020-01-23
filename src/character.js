class Character {
  constructor() {
    this.x = 50;
    this.y = 320;
    this.size = 80;
    this.step = 40;
    this.img = loadImage("assets/Caminhada.gif");
  }
  setup() {
    this.x = this.x;
    this.y = height - 80;
  }
  draw() {
    this.x = mouseX;
    image(this.img, mouseX, this.y, this.size, this.size);
  }

  moveRight() {
    console.log("right pressed");
    mouseX = mouseX + this.step;
  }

  moveLeft() {
    console.log("left pressed");
    mouseX = mouseX - this.step;
  }
}
