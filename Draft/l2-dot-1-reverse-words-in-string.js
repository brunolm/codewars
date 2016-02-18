// http://www.codewars.com/kata/l2-dot-1-reverse-words-in-string

const reverseWords = s => {
  let r = [];
  s.split(' ').forEach(w => r.push(w));
  return r.reverse().join(' ');
};