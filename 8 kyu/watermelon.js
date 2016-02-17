// http://www.codewars.com/kata/watermelon/solutions/javascript/me

function divide(weight){
  return weight > 2 && !(weight & 1);
}

// alternative solution
divide=w=>w>2&&!(w&1)