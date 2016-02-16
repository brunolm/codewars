// http://www.codewars.com/kata/first-character-that-repeats/solutions/javascript/me

function firstDup (s) {
  let i = 0;
  for (let c of s) {
    if (s.indexOf(c, ++i) != -1) return c;
  }
  
  return undefined;
}