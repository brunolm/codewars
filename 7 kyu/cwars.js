// http://www.codewars.com/kata/cwars/solutions/javascript/me

const initials = s =>
  s.replace(/([a-z])(\w+)/gi, (m, p1, p2) => p1.toUpperCase() + p2)
  .replace(/\b([A-Z])\w+\b[^$]/g, (m, p1) => `${p1}.`);