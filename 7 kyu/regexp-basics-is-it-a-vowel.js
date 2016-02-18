// http://www.codewars.com/kata/regexp-basics-is-it-a-vowel

String.prototype.vowel = function() {
  return /^[aeiou]$/i.test(this) && !/\n/.test(this);
};