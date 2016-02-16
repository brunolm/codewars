// http://www.codewars.com/kata/insert-dashes-2/solutions/javascript/me

const insertDashII = n => `${n}`.replace(/([13579])(?=[13579])/g, "$1-").replace(/([2468])(?=[2468])/g, "$1*");

// alternative solution
const insertDashII = n => {
  let s = '' + n;
  let r = s.replace(/([13579])([13579])/, '$1-$2');
  
  while (s.length != r.length) {
    s = r;
    r = s.replace(/([13579])([13579])/, '$1-$2');
  }
  
  r = s.replace(/([2468])([2468])/, '$1*$2');
  while (s.length != r.length) {
    s = r;
    r = s.replace(/([2468])([2468])/, '$1*$2');
  }
  
  return s;
};