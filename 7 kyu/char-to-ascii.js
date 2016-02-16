// http://www.codewars.com/kata/char-to-ascii/solutions/javascript/me

const charToAscii = s => !s ? null : s.split('')
  .reduce((a, c) => {
    if (/[a-z]/i.test(c))
      a[c] = c.charCodeAt(0)
    return a
  }, {});