// http://www.codewars.com/kata/grouped-by-commas/solutions/javascript/me

const groupByCommas = (n) => ('' + n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');