// http://www.codewars.com/kata/string-to-integer-conversion/solutions/javascript/me

function myParseInt(str) {
  if (/\D/.test(str.trim())) return NaN;
  return Number(str);
}