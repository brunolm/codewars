// http://www.codewars.com/kata/math-issues/solutions/javascript/me

Math.round = (n) => {
  let b = n.toString(2).replace(/\d+\./, '.');
  let has = /1/g.test(b);
  
  if (/^\.1/.test(b)) {
    n = Math.ceil(n);
  }
  else {
    n = Math.floor(n);
  }
  
  return n;
};

Math.ceil = (n) => {
  let has = /\.\d*(?=1)/g.test(n.toString(2).replace(/\d+\./, '.'));
  
  return has ? Math.floor(n) + 1 : n;
};

Math.floor = (n) => {
  return n ^ 0.1;
  // return ~~n;
  // return n | 0;
  // return (~n + 1) * -1;
  // return n << 0;
};