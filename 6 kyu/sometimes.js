// http://www.codewars.com/kata/sometimes/solutions/javascript/me

const sometimes = f => {
  var i = 0;
  return function(...a) {
    i++;
    if (i >= 4) {
      if ((i & 1) === 0) {
        return `hmm, I don't know!`;
      }
    }
    return f(...a);
  };
};