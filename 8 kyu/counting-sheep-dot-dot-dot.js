// http://www.codewars.com/kata/counting-sheep-dot-dot-dot/solutions/javascript/me

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(s =>s).length;
}

// alternative solution
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(s => s).length;
}

// alternative solution
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter( (s)=> s).length
  // TODO May the force be with you
}