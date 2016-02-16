// http://www.codewars.com/kata/are-there-any-arrows-left/solutions/javascript/me

const anyArrows = arrows => arrows.some(a => !a.damaged);

// alternative solution
const anyArrows = (arrows) => arrows.some(a => !a.damaged);