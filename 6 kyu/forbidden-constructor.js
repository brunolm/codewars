// http://www.codewars.com/kata/forbidden-constructor

var Point = (function() {
  function Point(x, y) {
    throw 'a';
  }
  
  var x = function (x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
  
  Point.prototype = x.prototype; 
  
  Point.create = function() {
    return x.apply(Object.create(x.prototype), arguments);
  };
  
  return Point;
})();
