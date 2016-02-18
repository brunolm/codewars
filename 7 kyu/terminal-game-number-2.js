// http://www.codewars.com/kata/terminal-game-number-2

Hero.prototype.move = function (dir) {
  let p = this.position;
  switch (dir) {
    case 'down':
      this.position = +this.position + 10;
      break;
    case 'right':
      this.position = +this.position + 1;
      break;
    case 'up':
      this.position = +this.position - 10;
      break;
    case 'left':
      this.position = +this.position - 1;
      break;
  }
  
  if ([0, 1, 2, 3, 4,
  10, 11, 12, 13, 14,
  20, 21, 22, 23, 24,
  30, 31, 32, 33, 34,
  40, 41, 42, 43, 44].indexOf(+this.position) == -1) {
    this.position = p;
    throw 'shit';
  }
  
  this.position = ('00'+this.position).slice(-2);
}
