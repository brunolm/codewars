// http://www.codewars.com/kata/drink-about

var peopleWithAgeDrink = function(old) {
  let msg = 'drink ';
  
  if (old >= 21) {
    msg += 'whisky'
  }
  else if (old >= 18) {
    msg += 'beer'
  }
  else if (old >= 14) {
    msg += 'coke'
  }
  else {
    msg += 'toddy'
  }

  return msg;
}