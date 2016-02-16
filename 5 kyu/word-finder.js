// http://www.codewars.com/kata/word-finder/solutions/javascript/me

class Dictionary {
  constructor(w) {
    this.w = w;
  }
  
  getMatchingWords(p) {
    return this.w.filter(x => new RegExp(`^${p.replace(/\?/g, '\\w')}$`, 'gi').test(x));
  }
}