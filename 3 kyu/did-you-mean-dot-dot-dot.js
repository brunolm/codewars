// http://www.codewars.com/kata/did-you-mean-dot-dot-dot

function Dictionary(words) {
  this.words = words;
}

function LevenshteinDistance(a, b){
  if(a.length == 0) return b.length; 
  if(b.length == 0) return a.length; 

  var matrix = [];

  // increment along the first column of each row
  var i;
  for(i = 0; i <= b.length; i++){
    matrix[i] = [i];
  }

  // increment each column in the first row
  var j;
  for(j = 0; j <= a.length; j++){
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for(i = 1; i <= b.length; i++){
    for(j = 1; j <= a.length; j++){
      if(b.charAt(i-1) == a.charAt(j-1)){
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min.apply(this, [matrix[i-1][j-1] + 1, matrix[i][j-1] + 1, matrix[i-1][j] + 1]);
      }
    }
  }

  return matrix[b.length][a.length];
}

Dictionary.prototype.findMostSimilar = function(term) {

  var results = this.words.map(function(e) {
    let countDiffLen = Math.abs(e.length - term.length);
    let countDiffChars = 0;
    
    for (let i = 0; i < e.length; ++i) {
      if (!~term.indexOf(e[i])) {
        countDiffChars++;
      }
    }
    
    return {
      word: e,
      points: LevenshteinDistance(e, term)
    };
  });
  
  return results.reduce(function(p, c) {
    return p.points < c.points ? p : c;
  }).word;
}