// http://www.codewars.com/kata/binary-genetic-algorithms/solutions/javascript/me

var GeneticAlgorithm = function () {};

GeneticAlgorithm.prototype.generate = function(length) {
  return Array.from(Array(length), (x, i) => ~~(Math.random() * 2)).join('');
};

GeneticAlgorithm.prototype.select = function(population, fitnesses) {
  let sum = fitnesses.reduce((a, b) => a + b, 0);
  
  while (true) {
    let i = r(population.length - 1);
    if (Math.random() < (fitnesses[i] / sum))
      return population[i]
  }
  
  return population[population.length - 1];
};

GeneticAlgorithm.prototype.mutate = function(chromosome, p) {
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

GeneticAlgorithm.prototype.crossover = function(chromosome1, chromosome2) {
  let rnd = r(chromosome1.length);
  return [
    chromosome1.slice(0, rnd) + chromosome2.slice(rnd),
    chromosome2.slice(0, rnd) + chromosome1.slice(rnd)
  ];
};

GeneticAlgorithm.prototype.run = function(fitness, length, p_c, p_m, iterations = 100) {
  let population = Array.from(Array(100), (x, i) => this.generate(length));
  let next = [];

  let fitnesses = population.map(c => fitness(c));
  
  for (let i = 0; i < iterations; ++i) {
  
    while (next.length < population.length) {
      let c1 = this.select(population, fitnesses);
      let c2 = this.select(population, fitnesses);
      
      //console.log(c1);
      if (Math.random() <= p_c) {
        [c1, c2] = this.crossover(c1, c2)
      }
      next.push(this.mutate(c1, p_m));
      next.push(this.mutate(c2, p_m));
    }

    population = next;
    next = [];
    fitnesses = population.map(c => fitness(c));
  }
  
  //console.log(population.sort((a, b) => fitness(b) - fitness(a)));
  return population.sort((a, b) => fitness(b) - fitness(a))[0];
};

const r = n => ~~(Math.random() * (n + 1));