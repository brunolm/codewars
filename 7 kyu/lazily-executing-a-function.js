// http://www.codewars.com/kata/lazily-executing-a-function/solutions/javascript/me

var make_lazy = function (fn, ...args) {
  return function() {
    return fn(...args);
  }
};

// alternative solution
var make_lazy = function (fn, ...args) {
  return function() {
    return fn(...args);
  };
};

// alternative solution
var make_lazy = function (fn, ...args) {
  return function(){
    return fn(...args)
  }
};