// http://www.codewars.com/kata/naughty-or-nice-1

const naughtyOrNice = (data) => {
  data = JSON.stringify(data);
  return data.match(/Nice/g).length >= data.match(/Naughty/g).length
    ? 'Nice!'
    : 'Naughty!';
}