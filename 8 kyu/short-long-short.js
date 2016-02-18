// http://www.codewars.com/kata/short-long-short

function solution(a, b){
  let short = a.length > b.length ? b : a;
  let long = a.length > b.length ? a : b;
  
  return `${short}${long}${short}`;
}
