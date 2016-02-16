// http://www.codewars.com/kata/running-out-of-space/solutions/javascript/me

const spacey = a => a.map((x, i) => a.slice(0, i + 1).join(''));