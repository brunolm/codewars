// http://www.codewars.com/kata/leap-years

function isLeapYear(y) {
  return !(y & 3) && ( !!(y % 25) || !(y & 15) );
}