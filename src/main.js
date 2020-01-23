let balls = [];
let pictureX;
let gameOverPicture;
let brocoGameOver;
let startScreen;
let song;
let obstaclesImages = [];
let gameStarted = false;
let startingText =
  "Your character is very hungry!\n Collect some food but remember to choose wisely!\n PRESS space button to start the Game!";
let buttonON = false;
let enemybroco;
let evilLaugh;
//let yahoo;

function keyPressed() {
  if (keyCode === 39) {
    console.log("pressed");
    game.character.moveRight();
  } else if (keyCode === 37) {
    game.character.moveLeft();
  } else if (keyCode === 32) {
    console.log("pressed");
    gameStart();
  }
}
function gameStart() {
  gameStarted = true;
  console.log("executed");
}

const game = new Game();

function preload() {
  enemybroco = loadImage("assets/broco.png");
  pictureX = loadImage("assets/Flat Night 2 BG.png");
  obstaclesImages[0] = loadImage("assets/taco.png");
  obstaclesImages[1] = loadImage("assets/ice.gif");
  gameOverPicture = loadImage("assets/giphytoothdec.gif");
  yahoo = loadSound("assets/NFF-yahoo.wav");
  evilLaugh = loadSound("assets/NFF-evil-laugh.wav");
  fatigue = loadSound("assets/NFF-boy-fatigue.wav");
  startScreen = loadImage("assets/gr.gif");
  brocoGameOver = loadImage("assets/healthy-life.gif");
  game.init();
}

function setup() {
  createCanvas(600, 400);

  game.setup();
}

function draw() {
  background(startScreen);
  textStyle(BOLD);
  textSize(20);
  textAlign(CENTER, BASELINE);
  fill(255, 255, 255);
  text(startingText, 300, 300);

  if (gameStarted === true) {
    background(pictureX);
    game.draw();
  }
}

function createButton() {
  if (buttonON === true) {
  }
}

function justDoIt() {
  let button = document.createElement("BUTTON");
  button.innerText = "PLAY AGAIN";
  let div = document.createElement("DIV");
  document.body.appendChild(button);
  button.onclick = function() {
    document.location.reload();
  };
  evilLaugh.play();
  justDoIt = function() {};
}
