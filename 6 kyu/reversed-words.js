// http://www.codewars.com/kata/reversed-words

const reverseWords = s => {
  let r = [];
  s.split(' ').forEach(w => r.push(w));
  return r.reverse().join(' ');
};