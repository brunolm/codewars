// http://www.codewars.com/kata/patterncraft-state

class SiegeState {
  constructor() {
    Object.assign(this, {
      canMove: false,
      damage: 20
    });
  }
}

class TankState {
  constructor() {
    Object.assign(this, {
      canMove: true,
      damage: 5
    });
  }
}

class Tank {
  constructor() {
    Object.assign(this, {
      state: new TankState()
    });
  }

  get canMove() { return this.state.canMove; }
  get damage() { return this.state.damage; }
}