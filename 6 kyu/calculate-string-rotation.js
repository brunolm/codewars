// http://www.codewars.com/kata/calculate-string-rotation

const shiftedDiff = (f, s) => {
  if (f === s) return 0;
  if (f.length !== s.length) return -1;
  
  for (let i = 0; i < f.length; ++i) {
    if (f === shift(s, i))
      return i;
  }
  
  return -1;
};
const shift = (w, s) => {
  let r = w.split('');
  for (let i in w) {
    r[+i] = w[(+i + s) % w.length];
  }
  return r.join('');
};