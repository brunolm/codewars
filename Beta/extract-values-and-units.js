// http://www.codewars.com/kata/extract-values-and-units

const valAndUnits = s => {
  let x = s.match(/^([-]?\d+(?:\.\d+)?)\s*(.*)$/);

  return {
    val: +x[1],
    units: x[2]
  }
};