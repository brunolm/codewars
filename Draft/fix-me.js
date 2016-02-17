// http://www.codewars.com/kata/fix-me/solutions/javascript/me

function fixMe() {
  var numbers = [];
  
  
  for (let i = 0; i < 10; i++) {
    
    numbers[i] = function () {
      return i;
    };

  }

  return numbers;
}