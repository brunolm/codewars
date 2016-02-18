// http://www.codewars.com/kata/this-is-odd

const isOdd = n => n != ~~n ? !(n % 2) : !!(n & 1);