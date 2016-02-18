// http://www.codewars.com/kata/number-like-counter

function Counter(){
  this.c = 0;
}

Counter.prototype.incr = function() {
  this.c++;
};

Counter.prototype.valueOf = function () {
  return this.c;
};