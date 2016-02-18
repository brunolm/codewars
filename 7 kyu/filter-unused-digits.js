// http://www.codewars.com/kata/filter-unused-digits

const unusedDigits = (...a) => {
  let s = a.join('');
  let r = [];
  for (let i = 0; i < 10; ++i) {
    if (s.indexOf(''+i) === -1)
      r.push(i);
  }
  return r.join('');
};