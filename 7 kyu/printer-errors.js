// http://www.codewars.com/kata/printer-errors/solutions/javascript/me

const printerError = s => `${(s.match(/[n-z]/g) || []).length}/${s.length}`;

// alternative solution
const printerError = s => `${ (s.match(/[n-z]/g) || []).length }/${ s.length }`;

// alternative solution
const printerError = s =>
  `${(s.match(/[n-z]/g) || []).length}/${s.length}`

// alternative solution
const printerError = (s) => `${(s.match(/[n-z]/g) || []).length}/${s.length}`;