// http://www.codewars.com/kata/escape-html-markup/solutions/javascript/me

const escapeHTML = s =>
  s.replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    ;