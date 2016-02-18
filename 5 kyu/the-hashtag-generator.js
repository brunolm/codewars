// http://www.codewars.com/kata/the-hashtag-generator

const generateHashtag = (s) => !s || s.length+1 > 140 ? false : '#' + s.split(' ').map(w => w.slice(0,1).toUpperCase() + w.slice(1)).join('');
