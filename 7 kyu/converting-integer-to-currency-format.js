// http://www.codewars.com/kata/converting-integer-to-currency-format/solutions/javascript/me

function toCurrency(price){
  return numberFormat(price);
}
const numberFormat = (x) => x.toString()
  .split('').reverse().join('')
  .replace(/...(?!$)/g, '$&,')
  .split('').reverse().join('');