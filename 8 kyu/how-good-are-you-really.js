// http://www.codewars.com/kata/how-good-are-you-really/solutions/javascript/me

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b) / classPoints.length;
}


// alternative solution
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints>classPoints.reduce((a,b)=>a+b)/classPoints.length;
}


// alternative solution
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a,b) => a+b)/classPoints.length;
}
