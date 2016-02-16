// http://www.codewars.com/kata/count-the-divisible-numbers/solutions/javascript/me

const ThisIsFun = (x, y, k) => {
  let t = 0;
  for (let i = x,m; (m=i%k,i) <= y; i += k - m||1) {
    if (!(m)) ++t;
  }
  return t;
};

// this is BORING
const divisibleCount = (x, y, k) => {
  let u = Math.floor(y / k)
    , l = Math.floor((x - 1) / k);
  return u - l;
};
