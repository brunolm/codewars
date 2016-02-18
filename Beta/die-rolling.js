// http://www.codewars.com/kata/die-rolling

function dice(minimum, maximum){
  return ~~(Math.random() * (++maximum - minimum)) + minimum;
}