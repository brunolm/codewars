// http://www.codewars.com/kata/patterncraft-strategy

class Fly {
  move(unit) {
    unit.position += 10;
  }
}

class Walk {
  move(unit) {
    unit.position += 1;
  }
}

class Viking {
  constructor() {
    Object.assign(this, {
      position: 0,
      moveBehavior: new Walk()
    });
  }
  
  move() {
    this.moveBehavior.move(this);
  }
}