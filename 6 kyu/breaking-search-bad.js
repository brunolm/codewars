// http://www.codewars.com/kata/breaking-search-bad/solutions/javascript/me

const titles = TITLES;

function search(searchTerm) {
  return titles.filter(title => {
    return new RegExp(`${searchTerm}`, 'gi').test(title);
  });
}