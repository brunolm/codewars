// http://www.codewars.com/kata/prime-factors

const prime_factors = (n) => {
  let r = [];
  
  while (n > 1) {
    for (let i = 2; i <= n; ++i) {
      if (n % i === 0) {
        r.push(i);
        n = n / i;
        break;
      }
    }
  }
  
  return r;
};