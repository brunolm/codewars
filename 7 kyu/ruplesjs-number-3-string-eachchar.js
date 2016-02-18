// http://www.codewars.com/kata/ruplesjs-number-3-string-eachchar

String.prototype.eachChar = function(c) {
  return this.valueOf() === ''
    ? this.valueOf()
    : typeof c === 'string'
      ? this.split('').join(c) + c
      : this.split('').map(c).join('');
}