// http://www.codewars.com/kata/checkered-board/solutions/javascript/me

const ws = String.fromCharCode(9633);
const bs = String.fromCharCode(9632);

const chars = { 0: ws, 1: bs };

const checkeredBoard = (d) => {
  if (+d < 2 || ~~d !== d) return false

  let r = '';
  let color = d & 1 && true;
  
  for (let i = 0, len = d * d; i < len; ++i) {
    r += chars[+color] + ' ';
    
    if ((1 + i) % d === 0) {
      r = r.slice(0, -1) + '\n';
      
      if (d & 1 !== 0) {
        color = !color;
      }
    }
    else {
      color = !color;
    }
  }
  
  return r.slice(0, -1);
};