// http://www.codewars.com/kata/caesar-cipher-encryption-variation

const alp = Array.from(Array('z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1), (x, i) => String.fromCharCode(i + 97)).join('');
const caesarEncode = (s, shift) => {
  shift--;
  return s.split(' ').map(w => {
    shift++;
    return w.split('').map(c => {
      if (!~alp.indexOf(c)) return c;
      let sh = alp.indexOf(c) + shift;
      return alp[sh % alp.length];
    }).join('');
  }).join(' ');
};
