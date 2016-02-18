// http://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
  let m = 0;
  if (d >= 7) m = 50;
  else if (d >= 3) m =20;
  return (d * 40) - m;
}