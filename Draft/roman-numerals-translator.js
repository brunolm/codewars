// http://www.codewars.com/kata/roman-numerals-translator/solutions/javascript/me

function romanTranslator(number) {
  return RomanNumerals.toRoman(number);
}

var RomanNumerals = {};
RomanNumerals.numberToRomanDictionary = {
  '1000': 'M',
  '900': 'CM',
  '500': 'D',
  '400': 'CD',
  '100': 'C',
  '90': 'XC',
  '50': 'L',
  '40': 'XL',
  '10': 'X',
  '9': 'IX',
  '5': 'V',
  '4': 'IV',
  '1': 'I',
};
RomanNumerals.romanToNumberDictionary = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
};
  
RomanNumerals.toRoman = function(number) {
  var roman = '';
  let reversedKeys = Object.keys(RomanNumerals.numberToRomanDictionary).reverse();
  reversedKeys.forEach(key => {
    let item = RomanNumerals.numberToRomanDictionary[key];
    while (number >= +key) {
        roman += item;
        number -= +key;
    }
  });

  return roman;
};

RomanNumerals.fromRoman = function(roman) {
  let total = 0;

  let current, previous = 0;
  let currentRoman, previousRoman = '\0';

  for (let i = 0; i < roman.length; ++i) {
    currentRoman = roman[i];

    previous = previousRoman != '\0' ? RomanNumerals.romanToNumberDictionary[previousRoman] : '\0';
    current = RomanNumerals.romanToNumberDictionary[currentRoman];

    if (previous != 0 && current > previous) {
      total = total - (2 * previous) + current;
    }
    else {
      total += current;
    }

    previousRoman = currentRoman;
  }

  return total;
};