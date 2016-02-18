// http://www.codewars.com/kata/create-sequence-containing-all-allowed-characters

const createSequence = r => {
  let x = [];
  for (let i = 0; i < 255; ++i) {
    let s = String.fromCharCode(i);
    if (r.test(s)) x.push(s);
  }
  return x.join('');
}