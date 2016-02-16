// http://www.codewars.com/kata/simple-sentences/solutions/javascript/me

const makeSentence = p => p.join(' ').replace(/ ([,.])/g, '$1').replace(/\.*$/, '') + '.';