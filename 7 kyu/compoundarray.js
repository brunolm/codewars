// http://www.codewars.com/kata/compoundarray/solutions/javascript/me

function compoundArray(a, b) {
  let r = [];
  for (let i = 0, len = Math.max(a.length, b.length); i < len; ++i) {
    if (i < a.length) {
      r.push(a[i]);
    }
    if (i < b.length) {
      r.push(b[i]);
    }
  }
  return r;
}