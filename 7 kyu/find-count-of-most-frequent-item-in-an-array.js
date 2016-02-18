// http://www.codewars.com/kata/find-count-of-most-frequent-item-in-an-array

const mostFrequentItemCount = (collection) => !collection.length ? 0 : Math.max(...collection.map(c => collection.filter(x => c === x).length));