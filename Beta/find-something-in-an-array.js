// http://www.codewars.com/kata/find-something-in-an-array

var find = function(string, array) {
  return array.filter(s=>s === string).length>0;
}