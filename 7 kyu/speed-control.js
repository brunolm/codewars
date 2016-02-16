// http://www.codewars.com/kata/speed-control/solutions/javascript/me

const gps = (s, x) => {
  let r = [];
  x.reduce((a, b) => {
    r.push(((b - a) / s) * 3600);
    return b;
  }, 0);
  
  let m = Math.max(...r);
  return isFinite(m) ? m : 0;
};