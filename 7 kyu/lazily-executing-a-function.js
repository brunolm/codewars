// http://www.codewars.com/kata/lazily-executing-a-function

var make_lazy = function (fn, ...args) {
  return function() {
    return fn(...args);
  }
};