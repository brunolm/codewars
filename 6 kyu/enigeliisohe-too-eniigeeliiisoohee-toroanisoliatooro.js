// http://www.codewars.com/kata/enigeliisohe-too-eniigeeliiisoohee-toroanisoliatooro/solutions/javascript/me

const alp = 'abcdefghijklmnopqrstuvwxyz';

const toexuto = s => s.replace(/[^aeiou]/gi, m => {
  let i;
  if ((i = alp.indexOf(m.toLowerCase())) !== -1) {
    var r = /[aeiou]/gi;
    
    let piece = alp.slice(0, i);
    i = 0;
    while (r.exec(piece)) {
      if (i < r.lastIndex) {
        i = r.lastIndex - 1;
      }
    }

    return m + alp[i];
  }
  return m;
});