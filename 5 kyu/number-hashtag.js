// http://www.codewars.com/kata/number-hashtag

const getHashtags = (post) => (post.match(/\B#+(\w+)(?=\s|$)/g)||[]).map(s => s.replace(/^#+/, ''));

// alternative solution
const getHashtags = (post) => (post.match(/\B#+(\w|#)+/g)||[])
  .map(s => s.replace(/^#+/, ''))
  .filter(s => s.lastIndexOf('#') === -1);