/* eslint-disable linebreak-style */
import Character from '../Character';

export default class Undead extends Character {
  constructor() {
    super();
    this.name = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}
