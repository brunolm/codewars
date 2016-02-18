// http://www.codewars.com/kata/trim-a-string

String.prototype.trim = function() {
  return this.replace(/^\s+|\s+$/g, '');
};