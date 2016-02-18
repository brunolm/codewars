// http://www.codewars.com/kata/generate-html-links

const generateMenu = m => m.length ? m.map(i => `<a href="${i.url}">${i.text}</a>`).join('') : '';