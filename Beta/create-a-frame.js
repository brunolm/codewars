// http://www.codewars.com/kata/create-a-frame/solutions/javascript/me

const frame = (t, c) => {
  let max = Math.max(...(t.map(l => l.length)));
  
  let fullLine = [...Array(max + 4)].map(() => c).join('');
  
  let r = t.map(a => c + ' ' + a.padRight(' ', max) + ' ' + c).join('\n');
  return fullLine + '\n' + r + '\n' + fullLine;
};

Object.assign(String.prototype, {
  padRight(ch, n) {
    let pad = n - this.length;
    return `${ this }${ ch.repeat(pad) }`;
  },
  repeat(i) {
    i = Math.max(0, i)
    return [...Array(i)].map(() => this).join('');
  },
});
