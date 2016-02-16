// http://www.codewars.com/kata/international-morse-code-encryption/solutions/javascript/me

const encryption = (m) => m.split(' ').map(w => w.split('').map(c => CHAR_TO_MORSE[c]).join(' ')).join('   ');