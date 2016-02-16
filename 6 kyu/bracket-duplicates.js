// http://www.codewars.com/kata/bracket-duplicates/solutions/javascript/me

const stringParse = s => (''+s)===s ? s.replace(/([A-Z]|[a-z])(\1)(\1+)/g, '$1$2[$3]') : 'Please enter a valid string';