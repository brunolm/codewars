// http://www.codewars.com/kata/filter-coffee/solutions/javascript/me

const search = (b, p) => p.sort((x, y) => x - y).filter(x => x <= b).join();