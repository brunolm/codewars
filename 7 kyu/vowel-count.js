// http://www.codewars.com/kata/vowel-count/solutions/javascript/me

const getCount = (s) => s.length - s.replace(/[aeiou]/g, '').length;