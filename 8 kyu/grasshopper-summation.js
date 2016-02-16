// http://www.codewars.com/kata/grasshopper-summation/solutions/javascript/me

const summation = (n) => Array.apply(null, { length: n }).map((x, i) => i + 1).reduce((a, b) => a + b);