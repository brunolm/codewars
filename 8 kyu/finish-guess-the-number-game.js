// http://www.codewars.com/kata/finish-guess-the-number-game/solutions/javascript/me

class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {    
    return this.lives === 0 ? (!() => { throw 'dead' }()) : n === this.number ? true : (--this.lives, false);   
  }
}



// alternative solution
class Guesser {
  constructor(number, lives) {
    Object.assign(this, { number, lives });
  }

  guess(n) {
    if (this.lives <= 0) throw 'dead';
    return n === this.number || (this.lives--,false);
  }
}

// alternative solution
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if (this.lives > 0 && this.number === n) {
      return true;
    }
    else if (this.lives === 0) {
      throw new Error('dead');
    }
    this.lives--;

    return false;
  }
}