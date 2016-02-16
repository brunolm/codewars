// http://www.codewars.com/kata/split-an-array/solutions/javascript/me

function split(arr, prop) {
  let t = arr.filter(a => a[prop]);
  let f = arr.filter(a => !a[prop]);
  
  return [t,f];
}