// http://www.codewars.com/kata/rpg-dice-roller

/**
 * Interpret dice notation and generate result.
 *
 * @param {String} input Dice notation
 * @param {Boolean} verbose Determines verbose output
 * @returns {Number|Object} Returns an object if `verbose` is true,
 * otherwise returns integer.
 */
var roll = function (input, verbose) {
  if (typeof input !== 'string') return false;

  let tokens = input.match(/^\s*(\d*)\s*d\s*(\d+)((?:\s*[+-]\s*\d+)*)$/);
  
  if (!tokens) return false;
  
  let [m, dices, sides, modifiers] = tokens;
  
  dices = +dices || 1;
  sides = +sides;
  let modifier = (modifiers.match(/[-]?\s*\d+/g) || [])
    .reduce((a, b) => {
      b = b.replace(/ /g, '');
      return +a + +b;
    }, 0);

  let r = 0;
  let rolls = [];
  
  for (let i = 0; i < dices; ++i) {
    let roll = rnd(1, sides);
    rolls.push(roll);
    r += roll;
  }
  
  if (modifiers) {
    r += modifier
  }
  
  if (verbose) {
    return {
      dice: rolls,
      modifier: modifier
    };
  }

  return r;
};

const rnd = (a, b) => ~~(Math.random() * (b - a + 1)) + a;