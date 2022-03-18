const { species } = require('../data/zoo_data');

const namesQtde = species.reduce((acc, atual) => {
  acc[atual.name] = atual.residents.length;
  return acc;
}, {});
// console.log(namesQtde);
// reduce ou foreach para retornar obj
// contabilizar a qtde de animais de cada especie
function countAnimals(animal) {
  if (animal === undefined) {
    return namesQtde;
  }
  const { specie, sex } = animal;
  if (sex === undefined) {
    return namesQtde[specie];
  }
  const findingAnimal = species.find((elemento) => elemento.name === specie);
  console.log(findingAnimal);
  const genderAnimal = findingAnimal.residents.filter((sexo) => sexo.sex === sex);
  console.log(genderAnimal);
  const qtdeSeXAnimal = genderAnimal.length;
  // console.log(qtdeSeXAnimal);
  return qtdeSeXAnimal;
}

countAnimals();
module.exports = countAnimals;
