// http://www.codewars.com/kata/regexp-basics-is-it-a-vowel/solutions/javascript/me

String.prototype.vowel = function() {
  return /^[aeiou]$/i.test(this) && !/\n/.test(this);
};