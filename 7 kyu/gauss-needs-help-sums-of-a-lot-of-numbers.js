// http://www.codewars.com/kata/gauss-needs-help-sums-of-a-lot-of-numbers/solutions/javascript/me

const f = (n) => Number.isSafeInteger(n) && n > 0 ? Array.from(Array(n+1), (x, i) => i).reduce((a, b) => a + b) : false;