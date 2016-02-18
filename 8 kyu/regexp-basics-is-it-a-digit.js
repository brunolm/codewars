// http://www.codewars.com/kata/regexp-basics-is-it-a-digit

String.prototype.digit = function() {
  return /^\d$/.test(this);
};