// http://www.codewars.com/kata/put-a-letter-in-a-column

const buildRowText = (i, c) => `|${Array.from({ length: 9 }).map((a, j) => j == i ? c : ' ').join('|')}|`;