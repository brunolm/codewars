// http://www.codewars.com/kata/find-factors-of-a-number/solutions/javascript/me

const factors = (x) => {
  if (x !== ~~x || x < 1) return -1;
  
  let r = [];

  for (let i = 1; (x / i) >= 1; ++i) {
    if (x % i === 0)
      r.push(i);
  }

  return r.reverse();
};