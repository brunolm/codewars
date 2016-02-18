// http://www.codewars.com/kata/regexp-basics-parsing-prices

String.prototype.toCents = function() {
  if (typeof +this !== 'number') return null;

  let m = this.valueOf().match(/^[$](\d+)\.(\d{2})$/);
  
  if (!m || !m.length) return null;
  
  return +`${m[1]}${m[2]}`;
}