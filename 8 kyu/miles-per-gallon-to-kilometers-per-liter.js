// http://www.codewars.com/kata/miles-per-gallon-to-kilometers-per-liter/solutions/javascript/me

function converter (mpg) {
  return +(mpg*1.609344/4.54609188).toFixed(2)
}