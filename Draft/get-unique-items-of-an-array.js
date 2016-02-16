// http://www.codewars.com/kata/get-unique-items-of-an-array/solutions/javascript/me

const uniq = (a) => a.reduce((x, y) => (!~x.indexOf(y) && x.push(y),x), []);