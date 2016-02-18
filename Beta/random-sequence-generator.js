// http://www.codewars.com/kata/random-sequence-generator

class Randomizer {
  constructor(min, max) {
    this.s = Array.from({length: max-min+1 }, (x, i) => i + min);
    this.s = this.s.sort(_ => ~~(Math.random() * 10));
  }
  
  next() {
    if (!this.s.length) throw new Error('err');

    return this.s.shift();
  }
  
  sequence(n) {
    n = n || this.s.length;
    if (n > this.s.length || !this.s.length) throw new Error('err');

    return this.s.splice(0, n);
  }
}

/*
function Randomizer(min, max) {
}

Randomizer.prototype.next = function() {
  
  
  var number = Math.floor(Math.random() * max + min);
  
  return number;
};

Randomizer.prototype.sequence = function(size) {
  if (size === undefined) {
    size = this.numbers.length  ;
  } else if (size > this.numbers.length) throw new Error('Too many numbers');

  return [];
};
*/