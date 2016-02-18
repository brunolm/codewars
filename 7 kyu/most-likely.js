// http://www.codewars.com/kata/most-likely

function mostLikely(prob1,prob2){
  let p1 = prob1.split(':');
  let p2 = prob2.split(':');
  
  return (+p1[0] / +p1[1]) > (+p2[0] / +p2[1])
}