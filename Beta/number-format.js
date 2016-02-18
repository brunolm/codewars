// http://www.codewars.com/kata/number-format

var numberFormat = function (number) {
  return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
};
