// http://www.codewars.com/kata/number-pairs

const getLargerNumbers = (a, b) => a.map((x, i) => x > b[i] ? x : b[i]);