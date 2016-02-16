// http://www.codewars.com/kata/formatting-a-number-as-price/solutions/javascript/me

const numberToPrice = n => {
  if (isNaN(n) || typeof n !== 'number') return 'NaN';
  return n.toFixed(3).replace(/\B(?=(\d{3})+\b)/g, ',').slice(0, -1);
}