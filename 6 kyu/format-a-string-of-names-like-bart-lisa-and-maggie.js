// http://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/solutions/javascript/me

const list = n => n.reduce((a, b, i) => !i || i !== n.length - 1 ? !i ? `${b.name}` : `${a}, ${b.name}` : `${a} & ${b.name}`, '');