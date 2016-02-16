// http://www.codewars.com/kata/sum-of-all-arguments-1/solutions/javascript/me

const sum = (...a) => a.some(p => typeof p != 'number') ? false : a.reduce((x, y) => x + y, 0);