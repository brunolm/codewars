// http://www.codewars.com/kata/80-s-kids-number-1-how-many-licks-does-it-take/solutions/javascript/me

function totalLicks(env) {
  let keys = Object.keys(env);
  let total = keys.reduce((a, b) => a + env[b], 252);
  
  let tou = '';
  if (keys.length > 1 && keys.some(k => env[k] > 0)) {
    let g = keys.sort((a, b) => env[b] - env[a])[0];
    tou = ` The toughest challenge was ${g}.`;
  }
  
  return `It took ${total} licks to get to the tootsie roll center of a tootsie pop.${tou}`;
}