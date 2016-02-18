// http://www.codewars.com/kata/no-duplicates-here

const arrayDeDup = a => a instanceof Array ? Array.from(new Set(a.filter(x => x))).sort((x, y) => (''+x) > (''+y) ? 1 : -1) : 'Not an array';
