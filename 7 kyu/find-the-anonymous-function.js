// http://www.codewars.com/kata/find-the-anonymous-function

var FindFunction = function(func, arr) {
  let fn = func.filter(e => typeof e === 'function')[0];
  return arr.filter(fn);
}