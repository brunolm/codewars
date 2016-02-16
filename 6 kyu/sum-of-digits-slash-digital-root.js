// http://www.codewars.com/kata/sum-of-digits-slash-digital-root/solutions/javascript/me

const digital_root = n => {
  let r = 0;
  
  while ((''+n).length > 1) {
    r = (''+n).split('').reduce((a, b) => +a + +b, 0);
    n = r;
  }
  
  return r;
};