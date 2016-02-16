// http://www.codewars.com/kata/javascript-filter-3/solutions/javascript/me

const searchNames = l => l.filter(x => /^\.|\.$/.test(x)).map(x => l[l.indexOf(x) + 1]);
const rdc = l => l.reduce((a, b, i) => (/^\.|\.$/.test(b) && a.push(l[i+1]), a), []);