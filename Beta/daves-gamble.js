// http://www.codewars.com/kata/daves-gamble

const horses = n => {
  if (typeof n !== 'number' || ~~n !== n) return undefined;
  if (n <= 3) return n;

  return fat(n) / fat(n - 3)
};

const fat = n => {
  let r = n;
  while (n > 1) r *= --n;
  return r;
};