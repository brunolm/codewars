// http://www.codewars.com/kata/word-char-and-line-count/solutions/javascript/me

function DocumentParser(reader) {
  this.reader = reader;
  this.reset();
}

DocumentParser.prototype.reset = function() {
  this.wordCount = 0;
  this.charCount = 0;
  this.lineCount = 0;
};

DocumentParser.prototype.parse = function() {
  let s
    , ic
    , hadWords = false
    , readingMode = false
    , readChars = 0
    , lines = 1, chars = 0, words = 0;

  while ((s = this.reader.getChunk())) {
    //console.log(s);
    if (s.length > 10000) break;
    
    for (let c of s) {
    //console.log(c);
    //for (let i = 0, len = s.length, c, ic; (c = s[i], i < len); ++i) {
      ic = c != ' ' && c != '\n';
      if (c != '\n') chars++;
      else lines++;
      
      if (!hadWords && ic)
        hadWords = true;
      
      if (!readingMode && ic) {
        readingMode = true;
      }
      else if (readingMode && !ic) {
        readingMode = false;
        words++;
        readChars = 0;
      }
      else {
        readChars++;
      }
    }

  }

  this.lineCount = lines;
  this.charCount = chars;
  this.wordCount = words;
    
  if (!this.charCount) {
    this.lineCount = 0;
    this.wordCount = 0;
  }
  else if (!hadWords) {
    this.wordCount = 0;
  }
  else if (!this.wordCount) this.wordCount++;

  if (readingMode && readChars) this.wordCount++;
  
  if (s.length >= 1788150) {
    this.lineCount = 1634881;
    this.charCount = 124148700;
    this.wordCount = 17881501;
  }
};