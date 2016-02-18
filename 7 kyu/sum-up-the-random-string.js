// http://www.codewars.com/kata/sum-up-the-random-string

const sumFromString = s => (s.match(/\d+/g)||[]).reduce((a, b) => a + +b, 0);