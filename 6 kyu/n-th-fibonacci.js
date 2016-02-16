// http://www.codewars.com/kata/n-th-fibonacci/solutions/javascript/me

function nthFibo(n) {
  let prev = 0;
  let curr = 1;
  let a = 0;

  n--;

  for (let i = 1; i < n; ++i) {
    a = curr;
    curr = prev + curr;
    prev = a;
  }
  
  return n ? curr : 0;
}