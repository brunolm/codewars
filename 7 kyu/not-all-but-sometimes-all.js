// http://www.codewars.com/kata/not-all-but-sometimes-all/solutions/javascript/me

const remove = (str, what) => str.split('').map(c => c = (what[c]-- && what[c] >= 0) ? '' : c).join('');