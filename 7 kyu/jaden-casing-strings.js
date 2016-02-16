// http://www.codewars.com/kata/jaden-casing-strings/solutions/javascript/me

String.prototype.toJadenCase = function () {
  return this.split(' ').map(w => w.slice(0,1).toUpperCase() + w.slice(1)).join(' ');
};