// http://www.codewars.com/kata/formatting-decimal-places-number-1/solutions/javascript/me

function twoDecimalPlaces(number) {
  return +number.toFixed(4).slice(0, -2);
}