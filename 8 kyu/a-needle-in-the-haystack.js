// http://www.codewars.com/kata/a-needle-in-the-haystack/solutions/javascript/me

function findNeedle(haystack) {
  let i = haystack.indexOf('needle');
  
  if (i >= 0) {
    return `found the needle at position ${i}`;
  }
  
  return null;
}