// http://www.codewars.com/kata/down-arrow-with-numbers

const getADownArrowOf = n => {
  let r = '';
  let topTotal = n * 2 - 1;
  
  while (n > 0) {
    let inc = true;
    let total = n * 2 - 1;
    let spaces = (topTotal - total) / 2 + 1;
    
    r += Array(spaces).join(' ');
    for (let i = 0, c = 1; i < total; ++i) {
      r += (c % 10);
      
      if (c == n) {
        inc = false;
      }
      c += inc ? 1 : -1;
    }

    r += '\n';
    
    --n;
  }

  return r.slice(0, -1);
};