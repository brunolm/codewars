// http://www.codewars.com/kata/regexp-basics-is-it-a-hexadecimal-number/solutions/javascript/me

String.prototype.hexNumber = function() {
  return /^(0x)?[A-Fa-f0-9]+(?!\n)$/.test(this) && !/\n/.test(this);
};