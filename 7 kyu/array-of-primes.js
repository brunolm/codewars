// http://www.codewars.com/kata/array-of-primes/solutions/javascript/me

const primes = (s, e) => {
  if (s <= 1) s = 2;

  let p = Array.from({ length: e - s + 1 }, (x, i) => s + i);
  for (let i = s; i <= e; ++i) {
    for (let j = 2, m = Math.sqrt(i); j <= m; ++j) {
      if ((i % j) === 0) {
        p.splice(p.indexOf(i), 1);
        break;
      }
    }
  }
  return p.length ? p : null;
};