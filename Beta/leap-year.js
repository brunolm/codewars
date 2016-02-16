// http://www.codewars.com/kata/leap-year/solutions/javascript/me

const isLeapYear = y => !!(!!(y % 4) ^ !!(y % 100)) || (!(y % 4) && !(y % 100) && !(y % 400))