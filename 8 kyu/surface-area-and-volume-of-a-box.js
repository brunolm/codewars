// http://www.codewars.com/kata/surface-area-and-volume-of-a-box/solutions/javascript/me

const getSize = (width, height, depth) => [
  2 * width * height + 2 * height * depth + 2 * width * depth,
  width * height * depth
];


// alternative solution
const getSize = (width,height,depth) => [2*width*height + 2*height*depth + 2*width*depth,width*height*depth]

// alternative solution
const getSize = (width, height, depth) => [2 * width * height + 2 * height * depth + 2 * width * depth, width * height * depth];