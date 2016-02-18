// http://www.codewars.com/kata/escape-html-markup

const escapeHTML = s =>
  s.replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    ;