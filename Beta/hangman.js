// http://www.codewars.com/kata/hangman

const hangman = (word, letters) => {
  let lives = 7;
  for (let c of letters) {
    let r = new RegExp(`${c}`, 'gi');
    if (r.test(word)) {
      word = word.replace(r, '');
    }
    else {
      --lives;
    }
    
    if (!lives) {
      return false;
    }
    else if (!word) {
      return true;
    }
  }
  
  return false;
};