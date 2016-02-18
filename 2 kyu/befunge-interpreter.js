// http://www.codewars.com/kata/befunge-interpreter

const interpret = (code) => {
  //console.log(code);
  code = code.split('\n');
  
  let output = [];
  let stack = [];
  let cur = { x: 0, y: 0 };
  let dir = Direction.Right;
  let i = 0;
  let skip = false;
  let strMode = false;
  
  let codeBit = code[cur.y][cur.x];
  while (codeBit !== '@') {
    codeBit = code[cur.y][cur.x];
    // console.log(codeBit, stack);
    if (skip) {
      skip = false;
    }
    else if (strMode) {
      if (codeBit === '"') {
        strMode = false;
      }
      else {
        stack.push(codeBit.charCodeAt(0));
      }
    }
    
    else if (codeBit === '>') {
      dir = Direction.Right;
    }
    else if (codeBit === '<') {
      dir = Direction.Left;
    }
    else if (codeBit === 'v') {
      dir = Direction.Down;
    }
    else if (codeBit === '^') {
      dir = Direction.Up;
    }
    else if (codeBit === '?') {
      let directions = [
        { x: cur.x + 1, y: cur.y, d: Direction.Right },
        { x: cur.x - 1, y: cur.y, d: Direction.Left },
        { x: cur.x, y: cur.y + 1, d: Direction.Up },
        { x: cur.x, y: cur.y - 1, d: Direction.Down }
      ];
      directions = directions.filter(o => {
        return o.x >= 0 && o.x <= getSize(code, cur).x
          && o.y >= 0 && o.y <= getSize(code, cur).y;
      });
      dir = directions[~~((directions.length) * Math.random())].d;
    }
    
    else if (codeBit === '_') {
      if (+stack.pop() === 0) {
        dir = Direction.Right;
      }
      else {
        dir = Direction.Left;
      }
    }
    else if (codeBit === '|') {
      if (+stack.pop() === 0) {
        dir = Direction.Down;
      }
      else {
        dir = Direction.Up;
      }
    }

    else if (/[0-9]/.test(codeBit)) {
      stack.push(+codeBit);
    }
    
    else if (codeBit === '+') {
      stack.push(stack.pop() + stack.pop());
    }
    else if (codeBit === '-') {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(b - a);
    }
    else if (codeBit === '*') {
      stack.push(stack.pop() * stack.pop());
    }
    else if (codeBit === '/') {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(b / a);
    }
    else if (codeBit === '%') {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(b % a);
    }
    
    else if (codeBit === '!') {
      stack.push(stack.pop() === 0 ? 1 : 0);
    }
    
    else if (codeBit === '`') {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(b > a ? 1 : 0);
    }
    
    else if (codeBit === '.') {
      output.push(+stack.pop());
    }
    else if (codeBit === ',') {
      output.push(String.fromCharCode(+stack.pop()));
    }
    
    else if (codeBit === '#') {
      skip = true;
    }
    else if (codeBit === '"') {
      strMode = true;
    }
    
    else if (codeBit === ':') {
      if (!stack.length) {
        stack.push(0);
      }
      let v = stack.pop();
      stack = stack.concat([v, v]);
    }
    
    else if (codeBit === '\\') {
      if (stack.length === 1) {
        stack.unshift(0);
      }
      let a = stack.pop(), b = stack.pop();
      stack.push(a);
      stack.push(b);
    }
    
    else if (codeBit === 'p') {
      let y = stack.pop();
      let x = stack.pop();
      let v = stack.pop();
      
      // console.log(`put(${x},${y})=`, v, String.fromCharCode(+v));

      let r = code[y].split('');
      r.splice(x, 1, String.fromCharCode(+v));
      code[y] = r.join('');
    }
    
    else if (codeBit === 'g') {
      let y = stack.pop();
      let x = stack.pop();
      
      // console.log(`get(${x},${y})`, code[y][x], code[y][x].charCodeAt(0));
      stack.push(code[y].charCodeAt(x));
    }
    
    else if (codeBit === '$') {
      stack.pop();
    }
    
    /* #region Direction handling */
    switch (dir) {
      case Direction.Right:
        if (cur.x === getSize(code, cur).x) {
          cur.x = 0;
        }
        else {
          cur.x += 1;
        }
        break;
  
      case Direction.Left:
        if (cur.x === 0) {
          cur.x = getSize(code, cur).x;
        }
        else {
          cur.x -= 1;
        }
        break;
  
      case Direction.Up:
        if (cur.y === 0) {
          cur.y = getSize(code, cur).y;
        }
        else {
          cur.y -= 1;
        }
        break;
  
      case Direction.Down:
        if (cur.y === getSize(code, cur).y) {
          cur.y = 0;
        }
        else {
          cur.y += 1;
        }
        break;
    }
    /* #endregion */
  }
  
  return output.join('');
};

const getSize = (code, cur) => {
  return { x: code[cur.y].length, y: code.length };
};

const Direction = { };
(function (Direction) {
  Direction[Direction["Left"] = 0] = "Left";
  Direction[Direction["Right"] = 1] = "Right";
  Direction[Direction["Up"] = 2] = "Up";
  Direction[Direction["Down"] = 3] = "Down";
})(Direction);
