// http://www.codewars.com/kata/wilson-primes

function amIWilson(p) {
  let r = ((factorial(p-1) + 1) / (p * p));
  return r === ~~r;
}

var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
}