// http://www.codewars.com/kata/the-arpeggiator/solutions/javascript/me

const arpeggio = (n) => {
  if (!/^[A-G]$/.test(n)) return "unrecognised root note";
  
  const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  
  const start = notes.indexOf(n);
  
  return [
    n,
    notes[(start + 2) % notes.length],
    notes[(start + 4) % notes.length],
    notes[(start + 7) % notes.length]
  ];
};