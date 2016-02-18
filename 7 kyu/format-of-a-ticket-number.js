// http://www.codewars.com/kata/format-of-a-ticket-number

const nbrValidTickets = (tickets) => tickets.filter(t => /^[A-Z]\d[A-Z]{4}$/.test(t)).length;