// http://www.codewars.com/kata/is-a-number-prime/solutions/javascript/me

const isPrime = n => {
  if (n <= 1) return false;
  
  for (let i = 2, max = Math.sqrt(n); i <= max; ++i) {
    if (!(n % i)) return false;
  }
  
  return true;
};