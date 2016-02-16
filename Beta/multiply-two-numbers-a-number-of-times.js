// http://www.codewars.com/kata/multiply-two-numbers-a-number-of-times/solutions/javascript/me

function multiplyBy(x, y, n) {
  let r = [];
  for (let i = 0; i < n; ++i) {
    if (!r.length)
      r.push(x*y);
    else
      r.push(r.slice(-1)[0] * y);
  }
  return r;
};