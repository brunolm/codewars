// http://www.codewars.com/kata/genetic-algorithm-series-number-4-get-population-and-fitnesses/solutions/javascript/me

const mapPopulationFit = (p, f) => p.map(c => { return { chromosome: c, fitness: f(c) } });