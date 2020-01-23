let balls = [];
let pictureX;
let gameOverPicture;
let song;
let obstaclesImages = [];
//let yahoo;

function keyPressed() {
  if (keyCode === 39) {
    console.log("pressed");
    game.character.moveRight();
  } else if (keyCode === 37) {
    game.character.moveLeft();
  }
}

const game = new Game();

function preload() {
  pictureX = loadImage("assets/Flat Night 2 BG.png");
  obstaclesImages[0] = loadImage("assets/taco.png");
  obstaclesImages[1] = loadImage("assets/ice.gif");
  gameOverPicture = loadImage("assets/gameover.jpg");
  yahoo = loadSound("assets/NFF-yahoo.wav");
  fatigue = loadSound("assets/NFF-boy-fatigue.wav");
  game.init();
}

function setup() {
  createCanvas(600, 400);

  game.setup();
}

function draw() {
  // background(pictureX);
  game.draw();
}
