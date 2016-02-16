// http://www.codewars.com/kata/cambridge-word-scramble/solutions/javascript/me

const mixwords = s => {
  if (typeof s !== 'string') return undefined;

  return s.replace(/([a-z])([a-z]{2,})([a-z])/g, (m, f, c, l) => {
    let r = c;
    if (c.replace(new RegExp(c[0], 'g'), '') !== '') {
      while (r === c) {
        r = c.split('').shuffle().join('');
      }
    }
    return f + r + l;
  });
};

Array.prototype.shuffle = function() {
  let m = this.length, i;
  while (m) {
    i = ~~(Math.random() * m--);
    [this[m], this[i]] = [this[i], this[m]]
  }
  return this;
}