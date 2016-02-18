// http://www.codewars.com/kata/trimming-a-string

function trim(s, size) {
  return s.length > size ? s.slice(0, size <= 3 ? size : size - 3) + "..." : s.slice(0, size);
}