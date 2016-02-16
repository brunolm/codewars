// http://www.codewars.com/kata/shuffle-an-array-1/solutions/javascript/me

const shuffle = a => a.shuffle();

Array.prototype.shuffle = function() {
  let m = this.length, i;
  while (m) {
    i = ~~(Math.random() * m--);
    [this[m], this[i]] = [this[i], this[m]]
  }
  return this;
}