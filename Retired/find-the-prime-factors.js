// http://www.codewars.com/kata/find-the-prime-factors

const primeFactors = (n) => {
  if (n <= 1) return undefined;

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