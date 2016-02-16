// http://www.codewars.com/kata/character-counter/solutions/javascript/me

const validateWord = s => new Set(s.split('').map(w => s.match(new RegExp(`${escapeRegExp(w)}`, 'gi')).length)).size === 1;

const escapeRegExp = s => s.replace(/([\\/'*+?|()\[\]{}.^$])/g,"\\$1");