// http://www.codewars.com/kata/breaking-search-bad

const titles = TITLES;

function search(searchTerm) {
  return titles.filter(title => {
    return new RegExp(`${searchTerm}`, 'gi').test(title);
  });
}