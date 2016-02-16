// http://www.codewars.com/kata/unlimited-sum/solutions/javascript/me

const sum = (...a) => a.filter(x => ~~+x === x).reduce((x, y) => x + y, 0);