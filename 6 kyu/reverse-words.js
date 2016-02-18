// http://www.codewars.com/kata/reverse-words

const reverseWords = s => {
  return s.split(' ').map(w => w.split('').reverse().join('')).join(' ');
};