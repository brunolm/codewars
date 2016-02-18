// http://www.codewars.com/kata/tug-o-war

const tug_o_war = ([t1, t2]) => {
  let a = cpa(t1, t2);
  let l = t1.reverse().reduce(add);
  let r = t2.reduce(add);
  
  if (l == r) {
    if (!a) return `It's a tie!`;
    return `Team ${a} wins!`;
  }
  
  if (l >= r) return `Team 1 wins!`;

  return `Team 2 wins!`;
};

const add = (x, y) => x + y;
const cpa = (a, b) => a[0] > b[b.length - 1] ? 1 : a[0] == b[b.length - 1] ? 0 : 2;