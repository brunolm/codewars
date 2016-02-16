// http://www.codewars.com/kata/selective-fear-of-numbers/solutions/javascript/me

const AmIAfraid = (d, n) =>
  (/Mo/.test(d) && n == 12)
  || (/Tu/.test(d) && n > 95)
  || (/We/.test(d) && n == 34)
  || (/Th/.test(d) && !n)
  || (/Fr/.test(d) && !(n & 1))
  || (/Sa/.test(d) && n == 56)
  || (/Su/.test(d) && (n == 666 || n == -666))
  