// http://www.codewars.com/kata/genetic-algorithm-series-number-3-crossover/solutions/javascript/me

const crossover = (chromosome1, chromosome2, index) => {
  return [
    chromosome1.slice(0, index) + chromosome2.slice(index),
    chromosome2.slice(0, index) + chromosome1.slice(index)
  ];
};

// alternative solution
const crossover = (chromosome1, chromosome2, index) => {
  return [
    chromosome1.slice(0, index) + chromosome2.slice(index),
    chromosome2.slice(0, index) + chromosome1.slice(index),
  ];
};

// alternative solution
const crossover = (chromosome1, chromosome2, index) => {
  return [chromosome1.slice(0,index) + chromosome2.slice(index), chromosome2.slice(0,index) + chromosome1.slice(index)]
};

// alternative solution
const crossover = (chromosome1, chromosome2, index) => {
  return [ 
    chromosome1.slice(0, index) + chromosome2.slice(index),
    chromosome2.slice(0, index) + chromosome1.slice(index)
  ];
};

// alternative solution
const crossover = (chromosome1, chromosome2, index) => {
  return [chromosome1.slice(0,index) + chromosome2.slice(index), chromosome2.slice(0,index) + chromosome1.slice(index)];
};

// alternative solution
const crossover = (chromosome1, chromosome2, index) => {
  return [chromosome1.slice(0, index) + chromosome2.slice(index),
          chromosome2.slice(0, index) + chromosome1.slice(index)];
};

// alternative solution
const crossover = (chromosome1, chromosome2, index) => {
 return [chromosome1.slice(0,index)+chromosome2.slice(index),chromosome2.slice(0,index)+chromosome1.slice(index)];

};

// alternative solution
const crossover = (chromosome1, chromosome2, index) => {
  return [
    chromosome1.slice(0,index) + chromosome2.slice(index),
    chromosome2.slice(0,index) + chromosome1.slice(index),
  ];
};