class Ball {
  constructor() {
    this.x = random(20, width - 20);
    this.y = 10;
    this.width = 80;
    this.height = 50;

    this.randomNumber = Math.floor(Math.random() * 2);
    this.speed = random(0.5, 6);
  }

  draw() {
    if (
      game.character.x + game.character.size >= this.x &&
      game.character.x <= this.x + this.width &&
      this.y + this.height >= game.character.y &&
      game.character.y + game.character.size > this.y
      // //this.x - game.character.size <= game.character.x <= this.x + this.width
      //
    ) {
      game.counter = game.counter + 20;
      yahoo.play();
      game.balls.splice(game.balls.indexOf(this), 1);
      console.log("getting a point", game.character, this);
      console.log("Your score is=" + game.counter);
    }
    image(
      obstaclesImages[this.randomNumber],
      this.x,
      this.y + this.speed,
      this.width,
      this.height
    );

    this.y = this.y + this.speed;

    game.balls.forEach(function(ball) {
      if (ball.y > height) {
        game.balls.splice(game.balls.indexOf(ball), 1);
      }
    });
  }
}
