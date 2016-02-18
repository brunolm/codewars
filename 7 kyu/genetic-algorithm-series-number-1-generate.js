// http://www.codewars.com/kata/genetic-algorithm-series-number-1-generate

const generate = length => Array.from({length}, x => ~~(Math.random() * 2)).join('');

// alternative solution
const generate = length => Array.from(Array(length), (x, i) => ~~(Math.random() * 2)).join('');