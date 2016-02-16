// http://www.codewars.com/kata/count-the-digit/solutions/javascript/me

const nbDig = (n, d) => Array.from(Array(n + 1), (o, i) => i * i).join('').split('').filter(o => o == d).length;