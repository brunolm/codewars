// http://www.codewars.com/kata/prime-factorization

class PrimeFactorizer {
  constructor(n) {
    this.n = n;
  }
  get factor() {
    let r = {};
    div(this.n, r);
    return r;
  }
};

const div = (n, r) => {
  let pg = genPrime();
  let d;

  if (n === 1) return 1;
  while (n % (d = pg.next().value) !== 0) ;
  r[d] = r[d] ? r[d] + 1 : 1;
  
  return div(n/d, r);
};

function isPrime(n) {
  if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) {
    return false;
  }
  let m = Math.sqrt(n);
  for (let i = 2; i <= m; ++i) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function* genPrime() {
  let count = 0;
  while (true) {
    if (isPrime(count)) {
      yield count;
    }
    count++;
  }
}