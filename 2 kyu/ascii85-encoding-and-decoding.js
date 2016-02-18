// http://www.codewars.com/kata/ascii85-encoding-and-decoding

const fill = (s, c) => {
  let r = s.split('');
  let n = c ? 5 : 4;
  for (let i = s.length; i < n; ++i) {
    r[i] = c || String.fromCharCode(0);
  }
  return r;
};
const getChunks = (s, size) => {
  let r = [];
  let index = -1;
  for (let i = 0; i < s.length; ++i) {
    if ((i % size) === 0) {
      ++index;
    }
    
    if (typeof r[index] === 'undefined') {
      r[index] = '';
    }

    r[index] = r[index] + s[i];
  }
  return r;
};

String.prototype.toAscii85 = function() {
  let chuncks = getChunks(this, 4); //this.match(/.{1,4}/g);
  let parseResult = [];
  
  if (!chuncks) {
    return `<~${this}~>`;
  }

  chuncks.forEach(c => {
    if (c === '    ') {
      parseResult.push('y');
    }
    else {
      let bin = fill(c)
        .reduce((a, b) => {
          return a + b.charCodeAt(0).toString(2).pad('0', 8);
        }, '');
  
      let n = parseInt(bin, 2);
  
      let blockResult = [];
  
      for (let i = 0; i < 5; ++i) {
        let mod = ~~(n % 85);
        n = n / 85;
        blockResult.splice(0, 0, mod + 33);
      }
  
      let take = 5 - (4 - c.length);
  
      let r = blockResult.map(v => String.fromCharCode(v)).join('').slice(0, take);
      parseResult.push(r === '!!!!!' ? 'z' : r);
    }
  });
  parseResult = parseResult.join('');

  return `<~${parseResult}~>`;
}

String.prototype.fromAscii85 = function() {
  let s = this.substring(2, this.length - 2).replace(/\s/g, '');
  
  s = s.replace(/z/g, '!!!!!').replace(/y/g, '     ');
  let chuncks = getChunks(s, 5); //.match(/.{1,5}/g);
  let parseResult = [];
  
  chuncks.forEach(c => {
    if (c === '     ') {
      parseResult.push('    ');
    }
    else {
      let n = fill(c, 'u').reverse()
        .reduce((a, b, i) => {
          let x = b.charCodeAt(0) - 33;
          return a + (x * Math.pow(85, i));
        }, 0);
  
      let bin = n.toString(2).pad('0', 32);
  
      let blockResult = [];
      bin.match(/.{1,8}/g).forEach(b => {
        blockResult.push(String.fromCharCode(parseInt(b, 2)));
      });
  
      let take = 4 - (5 - c.length);
      parseResult.push(blockResult.join('').slice(0, take));
    }
  });

  return parseResult.join('');
}

String.prototype.pad = function(c, n) {
  if (this.length >= n) {
    return this;
  }
  
  let len = n - this.length;
  let s = this;
  while (len--) {
    s = c + s;
  }
  return s;
};