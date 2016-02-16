// http://www.codewars.com/kata/reverse-words/solutions/javascript/me

const reverseWords = s => {
  return s.split(' ').map(w => w.split('').reverse().join('')).join(' ');
};