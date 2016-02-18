// http://www.codewars.com/kata/bit-wise-number-2-shift-iness

Number.prototype.twos = function(n) {
  let c = this < 0 ? '1' : '0';
  return ((this < 0 ? '1' : '') + Math.abs(this).toString(2)).pad(c, n).slice(-n);
}

String.prototype.pad = function (ch, n) {
  return n>this.length ? Array(n-this.length+1).join(ch) + this : this.valueOf();
}