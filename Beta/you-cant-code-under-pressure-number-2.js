// http://www.codewars.com/kata/you-cant-code-under-pressure-number-2/solutions/javascript/me

function Counter(){
  var i=0;
  this.check=()=>i;
  this.increment=()=>++i;
};

// alternative solution
function Counter() {
  var i = 0;
  //quickly, now!
  this.check = () => i;
  this.increment = () => ++i;

};