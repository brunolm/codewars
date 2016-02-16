// http://www.codewars.com/kata/count-by-x/solutions/javascript/me

const countBy = (x, n) => Array.apply(null, { length: n }).map((e, i) => x * i + x);