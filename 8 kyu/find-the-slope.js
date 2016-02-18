// http://www.codewars.com/kata/find-the-slope

function slope(p) {
  let r = (p[3] - p[1]) / (p[2] - p[0]);
  return isFinite(r) ? ''+r : 'undefined';
}