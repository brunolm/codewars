// http://www.codewars.com/kata/more-than-one-way-to-call-a-function-or-skin-a-cat/solutions/javascript/me

function sum(a, b) {
  if (typeof b !== 'undefined') return a + b;
  
  return function(n) { return sum(a, n); };
}