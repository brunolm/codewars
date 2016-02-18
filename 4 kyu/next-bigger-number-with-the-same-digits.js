// http://www.codewars.com/kata/next-bigger-number-with-the-same-digits

function nextBigger(n) {
  let s = n.toString().split('').map(v => +v);
  
  for (let i = s.length - 1; i > 0; --i) {
    if (s[i] > s[i - 1]) {
      let e = s.slice(i - 1)
        .map((v, ind) => { return { n: v, i: ind, r: v - s[i - 1] } })
        .filter(v => v.r > 0)
        .sort((a, b) => {
          let weight = a.r - b.r;
          if (weight === 0) {
            return weight - (b.i - a.i)
          }
          return weight;
        });
      e = e[0];
      
      let index = i + e.i - 1;

      s.splice(i - 1, 0, s.splice(index, 1))//[0]);

      let lastPiece = s.splice(i);
      lastPiece = lastPiece.sort((a, b) => a - b);

      s = s.concat(lastPiece);
      break;
    }
  }
  
  let result = +s.join('');
  return result > n ? result : -1;
}
