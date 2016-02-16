// http://www.codewars.com/kata/regexp-basics-is-it-all-whitespace/solutions/javascript/me

Object.assign(String.prototype, {
  whitespace: function() { return /^\s*$/.test(this); }
});