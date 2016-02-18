// http://www.codewars.com/kata/finding-remainder-without-using-percent-operator

const remainder = (D,d) => d === 0 ? 'NaN' : D - ~~(D / d) * d;