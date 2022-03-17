const { species } = require('../data/zoo_data');

// Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.
// Deve retornar um valor booleano.

function getAnimalsOlderThan(animal, age) {
  const findingAnimal = species.find((elementoF) => elementoF.name === animal);
  return findingAnimal.residents.every((elemento) => elemento.age >= age);
  // tenho que chegar no residents e dps no age dentro dele
  // verificar a age com a idade minima (>=)
}

getAnimalsOlderThan('otters', 7);
module.exports = getAnimalsOlderThan;
