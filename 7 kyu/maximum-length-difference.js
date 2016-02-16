// http://www.codewars.com/kata/maximum-length-difference/solutions/javascript/me

const mxdiflg = (a1, a2) => {
  if (!a1.length || !a2.length) return -1;
  var w = a1.map(x => a2.map(y => Math.abs(x.length - y.length)));
  return Math.max(...w.reduce((x, y) => x.concat(y)));
};