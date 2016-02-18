// http://www.codewars.com/kata/sum-of-odd-numbers

const rowSumOddNumbers = n => {
  let x = 0;
  let r = [[]];
  for (let i = 0; x <= n; ++i) {
    if (i & 1) {
      r[x].push(i);
    }
      
    if (r[x].length === (x + 1)) {
      ++x;
      r[x] = [];
    }
  }

  return r[n - 1].reduce((a, b) => a + b, 0);
};