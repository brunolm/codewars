// http://www.codewars.com/kata/prefill-an-array/solutions/javascript/me

const prefill = (n, v) => +n == (''+ n) && n == ~~+n && isFinite(+n) && n >= 0
  ? Array.from({ length: +n }, (x, i) => v)
  : (() => { throw new TypeError(`${n} is invalid`); })();