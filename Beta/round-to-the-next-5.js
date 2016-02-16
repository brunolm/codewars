// http://www.codewars.com/kata/round-to-the-next-5/solutions/javascript/me

function roundToNext5(n){
  if (n%5) {
    return n + (5 - n%5);
  }
  return n;
}

// alternative solution
function roundToNext5(n){
  if(n%5)
  return n + (5 - n%5)
  
  return n;
}