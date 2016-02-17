// http://www.codewars.com/kata/regexp-basics-is-it-a-digit/solutions/javascript/me

String.prototype.digit = function() {
  return /^\d$/.test(this);
};