const { species } = require('../data/zoo_data');

const namesQtde = species.reduce((acc, atual) => {
  acc[atual.name] = atual.residents.length;
  // console.log(atual.name); mostra os nomeSpecie
  // console.log(atual.residents.length); mostra as qtdeSpecie
  return acc;
}, {});
// console.log(namesQtde); mostra obj com (nomeSpecie: qtdeSpecie)
// usar reduce ou foreach para retornar obj
// contabilizar a qtde de animais de cada especie
function countAnimals(animal) {
  // console.log(animal); { specie: 'elephants', sex: 'male' }
  if (animal === undefined) {
    // notação para se n receber nenhum parametro
    return namesQtde;
  }
  const { specie, sex } = animal;
  // destruturação do obj animal
  // console.log({ specie, sex }); { specie: 'elephants', sex: 'male' }
  if (sex === undefined) {
    return namesQtde[specie];
  }
  const findingAnimal = species.find((elemento) => elemento.name === specie);
  // console.log(findingAnimal); mostra o obj com nomeAnimal = valor specie passado como parametro
  const genderAnimal = findingAnimal.residents.filter((sexo) => sexo.sex === sex);
  // console.log(genderAnimal); { name: 'Orval', sex: 'male', age: 15 },
  const qtdeSeXAnimal = genderAnimal.length;
  // console.log(qtdeSeXAnimal); qtde de animaix por sexo
  return qtdeSeXAnimal;
}

countAnimals();
module.exports = countAnimals;
