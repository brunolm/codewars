// http://www.codewars.com/kata/regexp-basics-parsing-mana-cost

String.prototype.parseManaCost = function() {
  if (/[^\dwubrg]/i.test(this.valueOf())) return null;
  
  const types = "wubrg";
  
  let s = this.valueOf();
  let mana = {};
  let m;
  
  m = s.match(/\d+/);
  if (m && m[0] != 0) mana['*'] = +m[0];
  
  s = s.split('').sort().join('');
  for (let t of types) {
    t = t.toLowerCase();
    m = s.match(new RegExp(`${t}+`, 'i'));
    if (m) mana[t] = m[0].length;
  }
  
  return mana;
}