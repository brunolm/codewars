// http://www.codewars.com/kata/regexp-basics-parsing-time/solutions/javascript/me

String.prototype.toSeconds = function() {
  let m = this.valueOf().match(/^(\d{2}):([0-5]\d):([0-5]\d)$/);
  if (!m) return null;

  return +m[1] * 36e2 + +m[2] * 60 + +m[3];
}