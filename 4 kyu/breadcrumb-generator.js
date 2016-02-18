// http://www.codewars.com/kata/breadcrumb-generator

// If one day I refactor this I might consider adding you on LinkedIn, but this code bellow is shameful

const ignore = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"];
const generateBC = (u, s) => {
  u = u.split('?')[0].split('#')[0];
  
  let r = [];
  let pieces = u.replace(/^https?:\/\//i, '').split('/').slice(1);
  let uc = '/';
  
  if (pieces.length >= 1 && pieces.join('') !== '') {
    for (let p of pieces) {
      uc = uc + p + '/';
      
      let name = '';
      if (p.length > 30) {
        name = p.split('-')
          .filter(w => ignore.indexOf(w) === -1)
          .map(c => c[0]).join('').toUpperCase();
      }
      else {
        name = p.split('-')
          //.filter(w => ignore.indexOf(w) === -1)
          .join(' ').toUpperCase();
      }
      
      r.push({
        url: uc,
        name: name
      });
    }
    
    let mid = r.slice(0, -1).map(b => `<a href="${b.url}">${b.name}</a>`).join(`${s}`);
    
    let lastName = r[r.length - 1].name.split('.')[0];

    if (/index/i.test(lastName)) {
      if (r.length === 1) {
        return `<span class="active">HOME</span>`;
      }
      lastName = r[r.length - 2].name;
      mid = r.slice(0, -2).map(b => `<a href="${b.url}">${b.name}</a>`).join(`${s}`);
    }
    let last = `<span class="active">${lastName}</span>`;
    
    mid = mid != '' ? `${mid}${s}` : '';
    
    return `<a href="/">HOME</a>${s}` + mid + last;
  }
  
  return `<span class="active">HOME</span>`;
};