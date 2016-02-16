// http://www.codewars.com/kata/the-range-function/solutions/javascript/me

function range(start, end, step = 1) {
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  if (end < start) return [];

  return Array.from({ length: (end - start)/(step||1) }, (x, i) => start + (step * i));
}