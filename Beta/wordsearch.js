// http://www.codewars.com/kata/wordsearch

function wordSearch(word, text){
console.log(word, '--------', text);
return new RegExp(`\\b${word}\\b`).test(text);
}