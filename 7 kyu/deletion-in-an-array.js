// http://www.codewars.com/kata/deletion-in-an-array

function deleteValues(array, pred) {
  for(var i = 0; i < array.length; i++) {
    if ( pred(array[i]) ) {
      array.splice(i, 1); i--;
    }
  }
  return array;
}
