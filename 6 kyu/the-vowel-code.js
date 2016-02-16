// http://www.codewars.com/kata/the-vowel-code/solutions/javascript/me

const encode = s => s.replace(/[aeiou]/gi, m => '0aeiou'.indexOf(m));

const decode = s => s.replace(/[1-5]/gi, m => '0aeiou'[m]);