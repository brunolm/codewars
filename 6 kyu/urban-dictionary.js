// http://www.codewars.com/kata/urban-dictionary

var WordDictionary = function () {
  this.words = {};
  this.wordsFound = {};
  this.lengths = [];
};

WordDictionary.prototype.addWord = function (word) {
  this.words[word] = word;
  if (!~this.lengths.indexOf(word.length)) {
    this.lengths.push(word.length);
  }
};

WordDictionary.prototype.search = function (word) {
  if (!~this.lengths.indexOf(word.length)) {
    return false;
  }
  if (this.wordsFound[word] || this.words[word]) {
    return true;
  }
  
  this.wordsFound[word] = Object.keys(this.words).some(w => {
    return new RegExp('^' + word + '$', 'i').test(w);
  });
 
  return this.wordsFound[word];
};
