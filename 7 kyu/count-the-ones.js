// http://www.codewars.com/kata/count-the-ones

function hammingWeight(number){
  var converted = [];

  while(number>=1) {
      converted.unshift(number%2);
      number = Math.floor(number/2);
  }
  
  return converted.filter(x => x == 1).length;
}