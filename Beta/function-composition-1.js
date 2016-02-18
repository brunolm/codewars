// http://www.codewars.com/kata/function-composition-1

function compose(...args) {
  return (...a) => {
    let r;

    args.reverse().forEach(fn => {
      if (typeof r === 'undefined')
        r = fn(...a);
      else
        r = fn(r);
    });

    if (typeof r === 'undefined')
      return a.pop();
      
    return r;
  };
}