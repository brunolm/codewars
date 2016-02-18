// http://www.codewars.com/kata/vowel-count

const getCount = (s) => s.length - s.replace(/[aeiou]/g, '').length;