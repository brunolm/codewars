// http://www.codewars.com/kata/the-old-switcheroo

const vowel2index = s => s.replace(/[aeiou]/gi, (m, i) => ++i);