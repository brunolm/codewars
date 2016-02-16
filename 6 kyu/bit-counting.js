// http://www.codewars.com/kata/bit-counting/solutions/javascript/me

const countBits = (n) => n.toString(2).replace(/0/g, '').length;