// http://www.codewars.com/kata/need-change

function getChange(m) {
  let r = {};
  
  if (m / 25 >= 1)
    r["25"] = ~~(m / 25);
    
  m %= 25;
  
  if (m / 10 >= 1) {
    r["10"] = ~~(m / 10);
  }
    
  m %= 10;
  
  if (m / 5 >= 1)
    r["5"] = ~~(m / 5);
    
  m %= 5;
  
  if (m >= 1)
    r["1"] = m;
    
  return r;
}