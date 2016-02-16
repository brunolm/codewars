// http://www.codewars.com/kata/ho-ho-ho-with-functions/solutions/javascript/me

const ho = (h) => ((h || '') + 'Ho!').replace(/\!(?!$)/g, ' ');