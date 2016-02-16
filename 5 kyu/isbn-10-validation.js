// http://www.codewars.com/kata/isbn-10-validation/solutions/javascript/me

const validISBN10 = isbn => /^\d{9,10}X?$/.test(isbn)
  && !(isbn.split('').map(x => +x.replace('X', '10')).reduce((a, b, i) => a + b * (i + 1)) % 11);