// http://www.codewars.com/kata/filter-coffee

const search = (b, p) => p.sort((x, y) => x - y).filter(x => x <= b).join();