// http://www.codewars.com/kata/find-something-in-an-array/solutions/javascript/me

var find = function(string, array) {
  return array.filter(s=>s === string).length>0;
}

// alternative solution
var find = function(string, array) {
  return array.filter(s => s === string).length > 0;
}