// http://www.codewars.com/kata/genetic-algorithm-series-number-5-roulette-wheel-selection

const select = (population, fitnesses) => {
  let sum = fitnesses.reduce((a, b) => a + b, 0);
  
  while (true) {
    let i = ~~(Math.random() * population.length);
    if (Math.random() < (fitnesses[i] / sum))
      return population[i]
  }
  
  return population[population.length - 1];
};