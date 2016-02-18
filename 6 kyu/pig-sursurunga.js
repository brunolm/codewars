// http://www.codewars.com/kata/pig-sursurunga

const sursurungal = t => t
  .replace(/\b(\d{2,}) ([^ \n]+)/g, (m, n, p1) => `${n} ga${p1.replace(/s$/, '')}ga`)
  .replace(/\b([3-9]) ([^ \n]+)/g, (m, n, p1) => `${n} ${p1.replace(/s$/, '')}zo`)
  .replace(/\b([2]) ([^ \n]+)/g, (m, n, p1) => `${n} bu${p1.replace(/s$/, '')}`)