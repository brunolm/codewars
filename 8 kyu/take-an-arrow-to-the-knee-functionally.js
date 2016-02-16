// http://www.codewars.com/kata/take-an-arrow-to-the-knee-functionally/solutions/javascript/me

const ArrowFunc = (arr) => arr.map(n => String.fromCharCode(n)).join('');

// alternative solution
const ArrowFunc = arr => arr.map(n => String.fromCharCode(n)).join('');