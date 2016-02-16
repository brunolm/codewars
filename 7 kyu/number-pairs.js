// http://www.codewars.com/kata/number-pairs/solutions/javascript/me

const getLargerNumbers = (a, b) => a.map((x, i) => x > b[i] ? x : b[i]);