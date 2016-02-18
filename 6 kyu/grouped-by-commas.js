// http://www.codewars.com/kata/grouped-by-commas

const groupByCommas = (n) => ('' + n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');