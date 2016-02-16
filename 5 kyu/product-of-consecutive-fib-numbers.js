// http://www.codewars.com/kata/product-of-consecutive-fib-numbers/solutions/javascript/me

function productFib(prod) {
  let prev = 0;
  let current = 1;
  let f;

  for (let i = 1; (prev * current) <= prod; ++i) {
    if ((prev * current) === prod) {
      return [prev, current, true];
    }
    f = prev + current;
    prev = current;
    current = f;
  }
  return [prev, current, false];
}

var looping = function(n) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};