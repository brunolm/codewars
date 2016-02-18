// http://www.codewars.com/kata/hangman-game

class Hangman {
  constructor(word) {
    Object.assign(this, {
      word,
      lives: 7,
      correct: [],
      wrong: [],
      state: true
    })
  }
  
  guess(letter) {
    if (!this.state) {
      return `The game has ended.`;
    }
    
    if (this.wrong.concat(this.correct).indexOf(letter) == -1) {
      if (new RegExp(letter, 'i').test(this.word)) {
        this.correct.push(letter);
      }
      else {
        this.lives--;
        this.wrong.push(letter);
        
        if (!this.lives) {
          this.state = false;
          return `You got hung! The word was ${this.word}.`;
        }
      }
      
      if (this.word.split('').every(w => this.correct.indexOf(w) != -1)) {
        this.state = false;
        return `You found the word! (${this.word})`;
      }
    }
    
    return Array.from({length: this.word.length }, (x, i) => {
      if (this.correct.indexOf(this.word[i]) != -1)
        return this.word[i];
      return '_';
    }).join(' ') + (this.wrong.length ? ` # ${this.wrong.join('')}` : '')
  }
}