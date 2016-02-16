// http://www.codewars.com/kata/additionless-addition/solutions/javascript/me

const add = (x, y) => !x ? y : add((x & y) << 1, x ^ y);