// http://www.codewars.com/kata/stringy-strings/solutions/javascript/me

const stringy = (size) => Array.apply(null, { length: size }).map((x, i) => +!(i & 1)).join('');