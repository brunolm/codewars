// http://www.codewars.com/kata/counting-duplicates/solutions/javascript/me

const duplicateCount = (s) => {
  s = Array.prototype.slice.apply(s.toLowerCase()).sort().join('');
  let m = s.match(/(.)\S*\1/ig);
  return m ? m.length : 0;
}