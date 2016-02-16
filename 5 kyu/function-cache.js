// http://www.codewars.com/kata/function-cache/solutions/javascript/me

const cache = fn => {
  this.c = {};
  var self = this;
  
  return function(...args) {
    let key = JSON.stringify(args);
    key = fn.toString() + key;
    
    if (typeof self[key] === 'undefined')
      self[key] = [fn(...args), 1];

    return self[key][0];
  };
}