// http://www.codewars.com/kata/patterncraft-adapter

class MarioAdapter {
  constructor(mario) {
    this.mario = mario;
  }
  
  attack(target) {
    target.health -= this.mario.jumpAttack();
  }
}