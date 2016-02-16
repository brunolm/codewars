// http://www.codewars.com/kata/tic-tac-toe-checker/solutions/javascript/me

const isSolved = (b) => {
   b = b.join('').replace(/,/g,'');

   return /^222|222$|...222...|2...2...2|..2.2.2..|2..2..2/.test(b) ? 2
     : /^111|111$|...111...|1...1...1|..1.1.1..|1..1..1/.test(b) ? 1
       : /0/.test(b) ? -1
         : 0;
}

// alternative solution
function isSolved(board) {
  if (check(board, 1))
    return 1;
    
  if (check(board, 2))
    return 2;

  return -~~(board.reduce((a, b) => {
    return a.concat(b);
  }).join('').indexOf('0') !== -1);
}

function check(board, n) {
  return (board[0][0] === n
    && board[0][1] === n
    && board[0][2] === n)
    ||
    (board[0][0] === n
    && board[1][1] === n
    && board[2][2] === n)
    ||
    (board[0][2] === n
    && board[1][1] === n
    && board[2][0] === n)
    ||
    (board[0][1] === n
    && board[1][1] === n
    && board[2][1] === n)
    ||
    (board[1][0] === n
    && board[1][1] === n
    && board[1][2] === n)
    ||
    (board[0][0] === n
    && board[1][0] === n
    && board[2][0] === n)
    ||
    (board[2][0] === n
    && board[2][1] === n
    && board[2][2] === n);
}