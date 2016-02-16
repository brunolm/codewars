// http://www.codewars.com/kata/80-s-kids-number-2-help-alf-find-his-spaceship/solutions/javascript/me

function findSpaceship(map) {
  if (!map || map.indexOf('X') === -1) return `Spaceship lost forever.`;
  
  let ship;
  
  let lines = map.split('\n');
  lines.forEach((l, li) => (i = l.indexOf('X')) != -1 ? (ship = [i, lines.length-1-li]) : 0);
  
  return ship;
}