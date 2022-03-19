const { species } = require('../data/zoo_data');
// Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada

function getAnimalsOlderThan(animal, age) {
  const findingAnimal = species.find((elementoF) => elementoF.name === animal);
  // console.log(findingAnimal); mostra obj com nomeSpecie identico passado como parametro
  const animalAge = findingAnimal.residents.every((elemento) => elemento.age >= age);
  // console.log(animalAge); true verifica se esta acima da idade minima
  return animalAge;
  // tenho que chegar no residents e dps no age dentro dele
  // verificar a age com a idade minima (>=)
}

getAnimalsOlderThan('otters', 7);
module.exports = getAnimalsOlderThan;
