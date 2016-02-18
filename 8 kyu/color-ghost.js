// http://www.codewars.com/kata/color-ghost

var Ghost = function() {
  let colors = [ 'red', 'white', 'yellow', 'purple', 'red' ];
  this.color = colors[~~(colors.length * Math.random())];
};