// http://www.codewars.com/kata/sum-of-numerous-arguments/solutions/javascript/me

const findSum = (...a) => a.some(p => p < 0) ? -1 : a.reduce((x, y) => x + y, 0);