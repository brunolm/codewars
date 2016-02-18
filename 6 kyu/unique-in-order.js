// http://www.codewars.com/kata/unique-in-order

const uniqueInOrder = (a) => {
  let r = [];
  return (!a || !a.length)
    ? []
    : Array.prototype.slice.apply(a, [0]).reduce((x, y) => {
        if (!r.length) {
          r.push(y);
        }
        else if (r[r.length - 1] != y) {
          r.push(y);
        }
        return r;
      }, '');
}