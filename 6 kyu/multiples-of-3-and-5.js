// http://www.codewars.com/kata/multiples-of-3-and-5

function solution(n) {
  return Array.apply(null, { length: n })
    .map(Number.call, Number)
    .reduce((a, b) => {
      return a + (!(b % 3) || !(b % 5) ? b : 0);
    }, 0);
}