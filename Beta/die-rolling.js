// http://www.codewars.com/kata/die-rolling/solutions/javascript/me

function dice(minimum, maximum){
  return ~~(Math.random() * (++maximum - minimum)) + minimum;
}