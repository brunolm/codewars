// http://www.codewars.com/kata/sum-of-all-arguments

function sum() {
  return Array.prototype.reduce.apply(arguments, [(a, b) => a + b]);
}