/* eslint-disable linebreak-style */
import Character from '../Character';

export default class Zombie extends Character {
  constructor() {
    super();
    this.name = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}
