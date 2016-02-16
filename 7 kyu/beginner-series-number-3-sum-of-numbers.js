// http://www.codewars.com/kata/beginner-series-number-3-sum-of-numbers/solutions/javascript/me

function GetSum(a, b) {
   if (a === b) {
     return a;
   }
   
   if (a > b) {
     b = b ^ a;
     a = b ^ a;
     b = b ^ a;
   }
   
   return Array.apply(this, Array(b + 1 - a))
     .map((n, i) => a + i)
     .reduce((x, y) => {
       return x + y;
     }, 0);
}