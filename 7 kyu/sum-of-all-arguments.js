// http://www.codewars.com/kata/sum-of-all-arguments/solutions/javascript/me

function sum() {
  return Array.prototype.reduce.apply(arguments, [(a, b) => a + b]);
}