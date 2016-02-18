// http://www.codewars.com/kata/keypad-horror

const computerToPhone = n => {
  const map = {
    '7': '1', '8': '2', '9': '3',
    '1': '7', '2': '8', '3': '9',
  };
  return n.split('').map(x => map[x]||x).join('');
};