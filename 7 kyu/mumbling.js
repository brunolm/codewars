// http://www.codewars.com/kata/mumbling

const accum = (s) => {
  return s.replace(/./g, (m, i) => {
    return m.toUpperCase() + (Array(i + 1).join(m.toLowerCase())) + '-';
  }).slice(0, -1);
}