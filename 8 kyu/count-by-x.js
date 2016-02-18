// http://www.codewars.com/kata/count-by-x

const countBy = (x, n) => Array.apply(null, { length: n }).map((e, i) => x * i + x);