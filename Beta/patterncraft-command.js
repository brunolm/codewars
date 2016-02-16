// http://www.codewars.com/kata/patterncraft-command/solutions/javascript/me

class Probe {
  constructor() {
    this.commands = [];
    this.position = { x: 0, y: 0 };
    this.minerals = 0;
  }

  move(x, y) {
    this.commands.push(new MoveCommand(this, x, y));
  }
  
  gather() {
    this.commands.push(new GatherCommand(this));
  }
}

class MoveCommand {
  constructor(unit, x, y) {
    this.unit = unit;
    this.position = { x, y }; 
  }
  execute() { if (this.canExecute()) this.unit.position = this.position; }
  canExecute() { return true; }
}

class GatherCommand {
  constructor(unit) { this.unit = unit; }
  execute() { if (this.canExecute()) this.unit.minerals += 5; }
  canExecute() {
    return this.unit.minerals === 0;
  }
}