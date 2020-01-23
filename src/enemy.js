class Enemy {
  constructor() {
    this.img = loadImage("assets/broco.png");
    this.x = random(20, width - 20);
    this.y = 10;
    this.width = 40;
    this.height = 40;
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
      game.counter = game.counter - 50;
      fatigue.play();
      game.enemies.splice(game.enemies.indexOf(this), 1);
      console.log("loosing a point", game.character, this);
      console.log("Your score is=" + game.counter);

      //console.log(game.balls);
      //add a condition->once it is out of the screen remove from the array
    }
    image(this.img, this.x, this.y + this.speed, this.width, this.height);

    this.y = this.y + this.speed;

    game.enemies.forEach(function(enemy) {
      if (enemy.y > height) {
        game.enemies.splice(game.enemies.indexOf(enemy), 1);
      }
    });
  }
}
