// http://www.codewars.com/kata/formatting-decimal-places-number-1

function twoDecimalPlaces(number) {
  return +number.toFixed(4).slice(0, -2);
}