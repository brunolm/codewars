// http://www.codewars.com/kata/ghostbusters-whitespace-removal/solutions/javascript/me

const ghostBusters = (building) => {
  if (/ /.test(building))
    return building.replace(/\s/g, '');
    
  return `You just wanted my autograph didn't you?`;
};