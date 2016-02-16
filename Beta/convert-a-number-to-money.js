// http://www.codewars.com/kata/convert-a-number-to-money/solutions/javascript/me

const numberToMoney = n => {
  if (isNaN(n) || typeof n !== 'number') return 'NaN';
  return ('' + +(n.toFixed(10).slice(0, -8))).replace(/\B(?=(\d{3})+\b)/g, ',');
}