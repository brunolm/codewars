// http://www.codewars.com/kata/debug-basic-calculator/solutions/javascript/me

var calculate = (...a) => {
  try { return eval(a.join('')); } catch (ex) { return null; }
};