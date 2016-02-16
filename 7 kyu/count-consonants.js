// http://www.codewars.com/kata/count-consonants/solutions/javascript/me

function consonantCount(str) {
  if (!str) {
    return 0;
  }
  let m = str.match(/[^aeiou]/gi);
  return !m
    ? 0
    : m.reduce((a, b) => {
      let c = b.charCodeAt(0);
      let inRange = (c > 'A'.charCodeAt(0) && c <= 'Z'.charCodeAt(0))
        || (c > 'a'.charCodeAt(0) && c <= 'z'.charCodeAt(0));
      return a + (inRange ? 1 : 0);
    }, 0);
}