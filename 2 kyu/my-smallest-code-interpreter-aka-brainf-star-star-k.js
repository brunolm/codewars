// http://www.codewars.com/kata/my-smallest-code-interpreter-aka-brainf-star-star-k/solutions/javascript/me

function brainLuck(code, input) {
  let output = [];
  let cur = {};
  
  let loops = [];
  
  let curIndex = 0;
  let inputReadIndex = 0;
  let i = 0;
  
  for (let i = 0; i < code.length; ++i) {
    let c = code[i];
    
    switch (c) {
      case ',': {
        cur[curIndex] = input[inputReadIndex++];
        break;
      }
      
      case '+': {
        let n = getDataCode(cur, curIndex) + 1;
        if (n === 256) n = 0;
        cur[curIndex] = String.fromCharCode(n);
        break;
      }
    
      case '-': {
        let n = getDataCode(cur, curIndex) - 1;
        if (n === -1) n = 255;
        cur[curIndex] = String.fromCharCode(n);
        break;
      }
    
      case '[': {
        loops.push(i);
  
        if (!getDataCode(cur, curIndex)) {
          loops.pop();
  
          let opens = 1;
          for (i = i + 1; i < code.length; ++i) {
            if (code[i] === '[') {
              ++opens;
            }
            else if (code[i] === ']') {
              --opens;
            }
            
            if (!opens) {
              break;
            }
          }
        }
        break;
      }
      
      case ']': {
        let x = loops.pop();
        if (getDataCode(cur, curIndex)) {
          i = x - 1;
        }
        break;
      }
      
      case '>': {
        curIndex++;
        break;
      }
      
      case '<': {
        curIndex--;
        break;
      }
      
      case '.': {
        output.push(getData(cur, curIndex));
        break;
      }
    }
  }

  return output.join('');
}

function getData(cur, curIndex) {
  if (typeof cur[curIndex] === 'undefined') {
    cur[curIndex] = String.fromCharCode(0);
  }
  return cur[curIndex];
}

function getDataCode(cur, curIndex) {
  return getData(cur, curIndex).charCodeAt(0);
}