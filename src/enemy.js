class Enemy {
  constructor() {
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
      game.brococounter = game.brococounter + 20;
      fatigue.play();
      game.enemies.splice(game.enemies.indexOf(this), 1);
    }
    image(enemybroco, this.x, this.y + this.speed, this.width, this.height);

    this.y = this.y + this.speed;

    game.enemies.forEach(function(enemy) {
      if (enemy.y > height) {
        game.enemies.splice(game.enemies.indexOf(enemy), 1);
      }
    });
  }
}
