// http://www.codewars.com/kata/range-extraction/solutions/javascript/me

const solution = (list) => {
  let last;
  let stack = [];
  let r = [];
  
  for (let e of list) {
    if (typeof last === 'undefined') {
      last = e;
      stack.push(e);
      continue;
    }

    if (e === (last + 1)) {
      stack.push(e);
    }
    else {
      if (stack.length >= 3) {
        r.push(stack[0] + '-' + stack.slice(-1));
      }
      else {
        stack.forEach(s => r.push(s));
      }
      stack = [];
      stack.push(e);
    }
    
    last = e;
  }

  if (stack.length >= 3) {
    r.push(stack[0] + '-' + stack.slice(-1));
  }
  else {
    stack.forEach(s => r.push(s));
  }

  return r.join(',');
};