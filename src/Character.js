/* eslint-disable linebreak-style */
export default class Character {
  constructor() {
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить Level умершего');
    } else {
      this.health = 100;
      this.level += 1;
      this.attack += (this.attack / 100) * 20;
      this.defence += (this.defence / 100) * 20;
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
