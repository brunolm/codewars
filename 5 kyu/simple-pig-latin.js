// http://www.codewars.com/kata/simple-pig-latin/solutions/javascript/me

const pigIt = (s) => s.split(' ').map(w => w.slice(1) + w[0] + 'ay').join(' ');
