// http://www.codewars.com/kata/escape-the-mines

// TODO: refactor
const solve = (map, miner, exit) => {
  if (miner.x === exit.x && miner.y === exit.y) {
    return [];
  }
  
  let mainList = [{ x: exit.x, y: exit.y, c: 0 }];
  let nextList = [];
  let found = false;
  let turn = 0;
  
  while (!found) {
    ++turn;
    if (turn > 25) break;

    for (let e of mainList) {
      let leftP = { x: e.x - 1, y: e.y };
      let left = getAt(map, leftP.x, leftP.y);
      
      let topP = { x: e.x, y: e.y - 1 };
      let top = getAt(map, topP.x, topP.y);
      
      let rightP = { x: e.x + 1, y: e.y };
      let right = getAt(map, rightP.x, rightP.y);
      
      let botP = { x: e.x, y: e.y + 1 };
      let bot = getAt(map, botP.x, botP.y);

      if (!left && !right && !top && !bot) {
        break;
      }
      // console.log(mainList);
      // console.log(left, right, top, bot);
      if (left) {
        left = getNext(mainList, left, turn);
        
        if (left) {
          nextList.push(left);
          
          found = check(left, miner);
          if (found) break;
        }
      }
      
      if (top) {
        top = getNext(mainList, top, turn);
        if (top) {
          nextList.push(top);
          
          found = check(top, miner);
          if (found) break;
        }
      }
      
      if (right) {
        right = getNext(mainList, right, turn);
        
        if (right) {
          nextList.push(right);
  
          found = check(right, miner);
          if (found) break;
        }
      }
      
      if (bot) {
        bot = getNext(mainList, bot, turn);
        
        if (bot) {
          nextList.push(bot);
  
          found = check(bot, miner);
          if (found) break;
        }
      }
    }
    
    // console.log(nextList);
    // console.log('------------------');
    mainList = mainList.concat(nextList);
    nextList = [];
  }
  
  let r = [];
  
  while (turn >= 0) {
    r.push(mainList.filter(o => o.c === turn)[0]);
    turn--;
  }
  console.log(r);

  let result = [];
  
  for (let i = 0; i < r.length - 1; ++i) {
    if (r[i + 1].x > r[i].x) {
      result.push('right');
    }
    else if (r[i + 1].x < r[i].x) {
      result.push('left');
    }
    else if (r[i + 1].y > r[i].y) {
      result.push('down');
    }
    else {
      result.push('up');
    }
  }
  
  return result;
};

const getAt = (map, x, y) => {
  try {
  //console.log(x, y);
    if (map[x][y]) {
      return { x: x, y: y, c: 0 };
    }
  }
  catch (ex) { }
  
  return undefined;
};

const getNext = (mainList, element, turn) => {
  let inList = mainList.filter(o => {
    return o.x === element.x && o.y === element.y;
  })[0];

  if (inList) {
    if (inList.c <= turn) {
      return undefined;
    }
    inList.c += 1;
    element = inList;
  } else {
    element.c = turn;
  }
  //console.log(element);
  return element;
};

const check = (element, miner) => {
  if (element.x === miner.x && element.y === miner.y) {
    return true;
  }

  return false;
};