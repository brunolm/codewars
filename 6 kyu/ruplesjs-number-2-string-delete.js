// http://www.codewars.com/kata/ruplesjs-number-2-string-delete

String.prototype.delete = function(...args) {
  let s = this.valueOf();
  args.forEach(a => {
    if (typeof a === 'string') {
      s = s.replace(new RegExp(`${a.replace(/([\\/'*+?|()\[\]{}.^$])/g,"\\$1")}`, 'g'), '');
    }
    else if (a instanceof Array) {
    
    }
    else if (a instanceof RegExp) {
      s = s.replace(a, '');
    }
  });
  
  return s;
};