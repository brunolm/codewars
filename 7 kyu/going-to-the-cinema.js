// http://www.codewars.com/kata/going-to-the-cinema

const movie = (card, ticket, perc) => {
  if (card === 0) return 2;
  let a = ticket;
  let b = card + ticket;
  let prev = a;
  let i = ~~(card / ticket);

  while (a <= Math.ceil(b)) {
    a = ticket * i;
    b = card;// + (ticket * (perc ** i));
    prev = ticket;
    for (let x = i; x+1; --x) {
      b += prev * perc;
      prev = prev * perc;
    }

    i++;
  }

  return i - 1;
};