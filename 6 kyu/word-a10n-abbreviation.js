// http://www.codewars.com/kata/word-a10n-abbreviation/solutions/javascript/me

const abbreviate = (s) => s.replace(/[a-z]{4,}/gi, (w) => w.slice(0,1) + (w.length - 2) + w.slice(-1));