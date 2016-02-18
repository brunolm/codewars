// http://www.codewars.com/kata/all-unique

const hasUniqueChars = (s) => {
  let r = {};
  for (let c in s) {
    r[s[c]] = (r[s[c]] || 0) + 1;

    if (r[s[c]] > 1) {
      return false;
    }
  }
  return true;
}