// http://www.codewars.com/kata/search-json-for-any-key-value-pair/solutions/javascript/me

const getCharacters = (obj, key, val) => {
  return obj.characters.filter(c => {
    return c[key] && c[key].toLowerCase() === val.toLowerCase();
  });
};