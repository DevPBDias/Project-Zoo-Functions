const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    // contar a qtde de residentes
    const count = species.forEach((elemento) => elemento.residents.length);
    console.log(count);
    return count;
  }
}
countAnimals();
module.exports = countAnimals;
