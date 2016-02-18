// http://www.codewars.com/kata/80-s-kids-number-7-shes-a-small-wonder

class Robot {
  constructor() {
    this.knownWords = new Set();
    this.knownWords.add('thank');
    this.knownWords.add('you');
    this.knownWords.add('for');
    this.knownWords.add('teaching');
    this.knownWords.add('me');
    this.knownWords.add('i');
    this.knownWords.add('already');
    this.knownWords.add('know');
    this.knownWords.add('understand');
  }
  
  learnWord(word) {
    let w = word.toLowerCase();
    if (this.knownWords.has(w)) {
      return `I already know the word ${word}`;
    }

    if (!/^[a-z]+$/.test(w)) {
      return 'I do not understand the input';
    }

    this.knownWords.add(w);
    return `Thank you for teaching me ${word}`;
  }
}