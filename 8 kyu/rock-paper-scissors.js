// http://www.codewars.com/kata/rock-paper-scissors/solutions/javascript/me

const rps = (p1, p2) => {
  const winMap = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock',
  };
  let v = winMap[p1] === p2 ? 1 : 2;
  return p1 === p2 ? 'Draw!' : `Player ${v} won!`;
};