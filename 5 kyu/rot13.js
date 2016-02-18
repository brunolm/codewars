// http://www.codewars.com/kata/rot13

const rot13 = s => s.replace(/[A-Z]/g, m => rot(m, 65)).replace(/[a-z]/g, m => rot(m, 97));

const rot = (c, a) => String.fromCharCode((((c.charCodeAt(0) - a) + 13) % 26) + a);