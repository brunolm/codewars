// http://www.codewars.com/kata/the-owls-are-not-what-they-seem

const owlPic = s => {
  let p = s.replace(/[^8WTYUIOAHXVM]/gi, '').toUpperCase();
  
  return `${p}''0v0''${p.split('').reverse().join('')}`;
};