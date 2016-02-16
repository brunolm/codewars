// http://www.codewars.com/kata/weird-string-case/solutions/javascript/me

const toWeirdCase = (s) => s.split(' ')
  .map(w => w.split('').map((x, i) => i & 1 ? x.toLowerCase() : x.toUpperCase()).join(''))
  .join(' ');