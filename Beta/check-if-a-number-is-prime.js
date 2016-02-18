// http://www.codewars.com/kata/check-if-a-number-is-prime

const checkPrime = n => isPrime(n);

const isPrime = n => {
  if (n <= 1) return false;
  
  for (let i = 2, max = Math.sqrt(n); i <= max; ++i) {
    if (!(n % i)) return false;
  }
  
  return true;
};