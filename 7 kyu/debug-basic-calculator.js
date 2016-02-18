// http://www.codewars.com/kata/debug-basic-calculator

var calculate = (...a) => {
  try { return eval(a.join('')); } catch (ex) { return null; }
};