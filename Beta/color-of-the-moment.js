// http://www.codewars.com/kata/color-of-the-moment

const hexToTime = hex => {
  return hex.match(/[0-9a-f]{2}/gi).map((m, i) => {
    let h = parseInt(m, 16);
    
    if ((!i && h > 23) || h > 59 || h < 0) throw '';

    return ('0' + h).slice(-2);
  }).join(':')
};

// alternative solution
hexToTime=x=>x.match(/\w\w/gi).map((m,i,h)=>{h = parseInt(m, 16);if((!i&&h>23)||h>59||h<0)throw '';return ('0'+h).slice(-2);}).join(':')

// alternative solution
const hexToTime = hex => {
  return hex.match(/[0-9a-f]{2}/gi).map((m, i) => {
    let h = parseInt(m, 16);
    
    if (h < 0) throw 'bla';
    
    switch (i) {
      case 0: if (h > 23) throw ''; break;
      case 1:
      case 2: if (h > 59) throw ''; break;
    }
    return ('0' + h).slice(-2);
  }).join(':')
};