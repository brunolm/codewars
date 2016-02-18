// http://www.codewars.com/kata/common-error-catcher

const checkLetters = (w, l, c) => (w.length - w.replace(new RegExp(`${l}`, 'g'), '').length) === (c || 1);