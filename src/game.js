class Game {
  constructor() {
    this.balls = [];
    this.counter = 0;
    this.enemies = [];
    this.finished = false;
  }

  init() {
    this.character = new Character();
    // this.sound = loadSound("assets/Get Lucky.mp3");
  }

  draw() {
    if (this.counter === 100) {
      this.finished = true;
      background(gameOverPicture);
      console.log("finished");
      this.balls.length = 0;
    } else if (this.counter < 100) {
      background(pictureX);
      this.character.draw();

      if (frameCount % 120 === 0) {
        this.balls.push(new Ball());
      }

      if (frameCount % 360 === 0) {
        this.enemies.push(new Enemy());
      }

      this.enemies.forEach(function(enemy) {
        enemy.draw();
      });

      this.balls.forEach(function(ball) {
        ball.draw();
      });
      fill(255, 255, 255);
      text("SCORE: " + this.counter, 500, 20);
    }
  }

  gameEnded() {
    if (this.counter === 100) {
      this.finished = true;
      console.log("finished call");
      ill(255, 255, 255);
      text("GAME OVER", 500, 20);
    }
  }
  setup() {
    this.character.setup();
    //this.sound.play();
  }
}
