// http://www.codewars.com/kata/is-n-divisible-by-x-and-y

function isDivisible(n, x, y) {
  return !(n % x) && !(n % y);
}