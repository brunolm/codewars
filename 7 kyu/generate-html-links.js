// http://www.codewars.com/kata/generate-html-links/solutions/javascript/me

const generateMenu = m => m.length ? m.map(i => `<a href="${i.url}">${i.text}</a>`).join('') : '';