// http://www.codewars.com/kata/parseint-reloaded

function parseInt(string) {
  let numbers = {
    'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9,
    'ten': 10, 'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fiveteen': 15, 'sixteen': 16,
      'seventeen': 17, 'eighteen': 18, 'nineteen': 19,
    'twenty': 20, 'thirty': 30, 'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90,
    'hundred': 100, 'thousand': 1000, 'million': 1000000
  };
  let s = string.split(/ |\band\b/g)
    .filter(v => v)
    .map(n => {
      if (!!~n.indexOf('-')) {
        n = n.split('-');
        n = numbers[n[0]] + numbers[n[1]];
        return n;
      }
      return numbers[n];
    });
  let max = s.indexOf(Math.max.apply(this, s));
  let r = [];
  if (!!~max) {
    r.push(s.slice(0, max + 1));
    r.push(s.slice(max + 1));
    r = r.filter(e => e.length);
  }
  else {
    r = s;
  }

  return r.reduce((a, b) => {
    if (b.constructor === Array) {
      return a + b.reduce((x, y) => {
        return y > x
          ? x * y
          : x + y;
      });
    }

    return a + b;
  }, 0);
}
