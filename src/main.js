let ball1;
let ball2;

let pictureX;
let punk;
let guy;
function preload() {
  pictureX = loadImage("assets/Flat Night 2 BG.png");
  guy = loadImage("assets/Caminhada.gif");
}

function setup() {
  createCanvas(600, 400);
  ball1 = new Ball();
  ball2 = new Ball();
  punk = new Character();
}

function draw() {
  background(pictureX);
  //image(pictureX, 0, 0);
  ball1.move();
  ball1.show();
  ball2.move();
  ball2.show();
  punk.move();
  punk.show();
  //image(guy, mouseX, mouseY, 80, 80);
}

class Ball {
  constructor() {
    this.x = random(0, 400);
    this.y = 10;
    //this.c = 50;
    this.speed = random(1, 5);
  }

  move() {
    this.x = this.x;
    this.y = this.y + this.speed;
  }
  show() {
    stroke(255);
    strokeWeight(4);

    ellipse(this.x, this.y, 24, 24);
  }
}

class Character {
  constructor() {
    this.x = 50;
    this.y = 320;
  }
  move() {
    this.x = this.x;
    this.y = this.y;
  }
  show() {
    image(guy, mouseX, this.y, 80, 80);
  }
}
