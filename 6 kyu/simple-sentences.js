// http://www.codewars.com/kata/simple-sentences

const makeSentence = p => p.join(' ').replace(/ ([,.])/g, '$1').replace(/\.*$/, '') + '.';