const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionario = employees.find((elemento) => elemento.id === id);
  // console.log(funcionario); // encontra o funcionario
  const primeiroAnimal = funcionario.responsibleFor.find((elemento) => elemento);
  // console.log(primeiroAnimal); // array com id dos animais
  const specificAnimal = species.find((elemento) => elemento.id === primeiroAnimal);
  console.log(specificAnimal); // obg do otters
  const animal = specificAnimal.residents;
  const animalVelho = animal.reduce((acc, curr) => {
    if (acc.age > curr.age) {
      return acc;
    }
    return curr;
  });
  const retorno = [animalVelho.name, animalVelho.sex, animalVelho.age];
  return retorno;
}

console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992')); // [ 'Margherita', 'female', 10 ]
module.exports = getOldestFromFirstSpecies;
