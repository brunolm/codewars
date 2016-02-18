// http://www.codewars.com/kata/grasshopper-summation

const summation = (n) => Array.apply(null, { length: n }).map((x, i) => i + 1).reduce((a, b) => a + b);