// http://www.codewars.com/kata/split-strings/solutions/javascript/me

const solution = s => s.match(/.{1,2}/g).map(c => c.length == 1 ? `${c}_` : c);