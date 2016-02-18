// http://www.codewars.com/kata/unlimited-sum

const sum = (...a) => a.filter(x => ~~+x === x).reduce((x, y) => x + y, 0);