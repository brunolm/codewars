// http://www.codewars.com/kata/convert-number-to-reversed-array-of-digits/solutions/javascript/me

const digitize = (n) => ('' + n).split('').reverse().map(n => +n);

// alternative solution
const digitize = n => (''+n).split('').reverse().map(n => +n);