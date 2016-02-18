// http://www.codewars.com/kata/convert-number-to-reversed-array-of-digits

const digitize = (n) => ('' + n).split('').reverse().map(n => +n);