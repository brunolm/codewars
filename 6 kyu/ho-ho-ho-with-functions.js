// http://www.codewars.com/kata/ho-ho-ho-with-functions

const ho = (h) => ((h || '') + 'Ho!').replace(/\!(?!$)/g, ' ');