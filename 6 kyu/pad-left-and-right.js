// http://www.codewars.com/kata/pad-left-and-right

String.prototype.padLeft = function(ch, n) {
  return this.length >= n
    ? this.valueOf()
    : (Array(n + 1).join(ch) + this).slice(-n);
};

String.prototype.padRight = function(ch, n) {
  return this.length >= n
    ? this.valueOf()
    : (this + Array(n + 1).join(ch)).slice(0, n);
};