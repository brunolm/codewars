// http://www.codewars.com/kata/absent-vowel

const absentVowel = s => {
  let i = 0;
  while (i <= 4 && (p = s.split('aeiou'[i++])).length !== 1) ;
  return i - 1;
};