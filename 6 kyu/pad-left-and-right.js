// http://www.codewars.com/kata/pad-left-and-right/solutions/javascript/me

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

// alternative solution

String.prototype.padLeft = function(ch, n) {
  return this.length >= n ? this.valueOf() : (Array(n + 1).join(ch) + this).slice(-n);
};

String.prototype.padRight = function(ch, n) {
  return this.length >= n ? this.valueOf() : (this + Array(n + 1).join(ch)).slice(0, n);
};