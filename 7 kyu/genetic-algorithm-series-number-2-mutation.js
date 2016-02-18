// http://www.codewars.com/kata/genetic-algorithm-series-number-2-mutation

const mutate = (chromosome, p) => {
  let r = [];

  for (let i = 0; i < chromosome.length; ++i) {
    if (Math.random() <= p) {
      r.push(+!+chromosome[i]);
    }
    else {
      r.push(chromosome[i]);
    }
  }
  return r.join('');
};