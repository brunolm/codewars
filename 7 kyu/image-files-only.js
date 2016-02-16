// http://www.codewars.com/kata/image-files-only/solutions/javascript/me

const imageFilter = a =>
  a.map(f => /(.+)\.(gifv?|jpe?g|png|tiff|bmp)$/i.test(f) ? [f, f.split('.')[0], f.split('.')[1]] : null);