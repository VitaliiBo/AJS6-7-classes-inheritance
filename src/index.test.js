/* eslint-disable linebreak-style */
// import Bowman from './characters/Bowerman';
// import Daemon from './characters/Daemon';
// import Magician from './characters/Magician';
// import Swordsman from './characters/Swordsman';
// import Undead from './characters/Undead';
import Zombie from './characters/Zombie';

test('Create Character, damage him and levelUp', () => {
  const char = new Zombie();
  char.damage(20);
  char.levelUp();
  expect(char).toEqual({
    health: 100,
    level: 2,
    name: 'Zombie',
    attack: 48,
    defence: 12,
  });
});

test('Create Character, kill him and levelUp', () => {
  const char = new Zombie();
  char.health = 0;
  char.damage(1);
  expect(() => char.levelUp()).toThrowError(new Error('Нельзя повысить Level умершего'));
});
