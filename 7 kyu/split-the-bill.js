// http://www.codewars.com/kata/split-the-bill/solutions/javascript/me

const splitTheBill = (x) => {
  let keys = Object.keys(x);
  let y = keys.reduce((a, b) => a + x[b], 0) / keys.length;
  
  let r = {};
  
  keys.map(o => r[o] = +(x[o] - y).toFixed(2));
  return r;
};