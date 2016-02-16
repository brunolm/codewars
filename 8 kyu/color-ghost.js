// http://www.codewars.com/kata/color-ghost/solutions/javascript/me

var Ghost = function() {
  let colors = [ 'red', 'white', 'yellow', 'purple', 'red' ];
  this.color = colors[~~(colors.length * Math.random())];
};