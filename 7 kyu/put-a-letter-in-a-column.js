// http://www.codewars.com/kata/put-a-letter-in-a-column/solutions/javascript/me

const buildRowText = (i, c) => `|${Array.from({ length: 9 }).map((a, j) => j == i ? c : ' ').join('|')}|`;