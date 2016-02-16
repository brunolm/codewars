// http://www.codewars.com/kata/this-is-odd/solutions/javascript/me

const isOdd = n => n != ~~n ? !(n % 2) : !!(n & 1);