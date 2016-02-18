// http://www.codewars.com/kata/weird-string-case

const toWeirdCase = (s) => s.split(' ')
  .map(w => w.split('').map((x, i) => i & 1 ? x.toLowerCase() : x.toUpperCase()).join(''))
  .join(' ');