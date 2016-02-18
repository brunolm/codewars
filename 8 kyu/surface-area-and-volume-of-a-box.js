// http://www.codewars.com/kata/surface-area-and-volume-of-a-box

const getSize = (width, height, depth) => [
  2 * width * height + 2 * height * depth + 2 * width * depth,
  width * height * depth
];
