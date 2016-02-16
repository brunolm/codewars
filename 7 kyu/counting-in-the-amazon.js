// http://www.codewars.com/kata/counting-in-the-amazon/solutions/javascript/me

const countArara = n => n == 1 ? 'anane' : n == 2 ? 'adak' : 'adak ' + countArara(n - 2);