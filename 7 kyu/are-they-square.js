// http://www.codewars.com/kata/are-they-square/solutions/javascript/me

const isSquare = a => a && a.length ? a.every(n => Math.sqrt(n) === ~~Math.sqrt(n)) : undefined;