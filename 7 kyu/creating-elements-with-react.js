// http://www.codewars.com/kata/creating-elements-with-react/solutions/javascript/me

let React = require('react');

const createElement = (c, t, p) => React.createElement(t || 'div', p, c);

const createUnorderedList = (l) => {
  let c = [];
  for (let i in l) {
    c.push(React.createElement('li', { key: i }, l[i]));
  }
  
  return React.createElement('ul', null, c);
}