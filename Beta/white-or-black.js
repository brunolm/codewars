// http://www.codewars.com/kata/white-or-black

const MineColor = (l, n) => {
  return mineColor(l, n);
};

const mineColor = (l, n) => {
  return board['abcdefgh'.indexOf(l)][n - 1] ? 'white' : 'black';
};

const board = [
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0]
];