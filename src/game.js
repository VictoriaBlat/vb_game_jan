class Game {
  constructor() {
    this.balls = [];
    this.counter = 0;
    this.brococounter = 0;
    this.enemies = [];
    this.finished = false;
    this.button;
  }

  init() {
    this.character = new Character();
    // this.sound = loadSound("assets/Get Lucky.mp3");
  }

  draw() {
    if (this.counter >= 100) {
      this.finished = true;
      background(gameOverPicture);
      this.balls.length = 0;
      //buttonON = true;

      justDoIt();
    } else if (this.brococounter >= 100) {
      this.finished = true;
      background(brocoGameOver);
      textStyle(BOLD);
      textSize(100);
      text("Good Job!", 320, 200);
      justDoIt();
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
      textSize(20);
      fill(255, 255, 255);
      text("MUNCHIES: " + this.counter, 500, 20);
      text("VEGIES: " + this.brococounter, 60, 20);
    }
  }

  setup() {
    this.character.setup();
  }
}
