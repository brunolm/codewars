// http://www.codewars.com/kata/count-the-digit

const nbDig = (n, d) => Array.from(Array(n + 1), (o, i) => i * i).join('').split('').filter(o => o == d).length;