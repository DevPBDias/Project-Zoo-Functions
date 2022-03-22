const { species } = require('../data/zoo_data');

function location() {
  const localAnimal = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((elemento) => localAnimal[elemento.location].push(elemento.name));
  // console.log(locationAnimal);
  return localAnimal;
}
location();

function locationResidents() {
  const locationAnimal = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((elemento) => {
    const objeto = { [elemento.name]: elemento.residents.map((item) => item.name) };
    locationAnimal[elemento.location].push(objeto);
    // console.log(objeto);
  });
  // console.log(locationAnimal);
  return locationAnimal;
}
locationResidents();

function locationResidentsFemale() {
  const animal = { NE: [], NW: [], SE: [], SW: [] };
  // if (options.sex === 'female') {
  species.forEach((item) => {
    const filtarFemale = item.residents.filter((sexo) => sexo.sex.includes('female'));
    // console.log(filtarFemale); // filtra os nomes femininos de cada animal
    const nameFemale = { [item.name]: filtarFemale.map((residents) => residents.name) };
    // console.log(nameFemale); // { lions: [ 'Zena', 'Dee' ] }
    animal[item.location].push(nameFemale);
    return animal;
  });
  console.log(animal);
  // }
  // return location();
}
locationResidentsFemale();

function getAnimalMap(options) {
  if (!options) location();
  if (!options.includeNames) location();
  if (options.sex) locationResidentsFemale();
  if (options.sorted) location
  return location();
}

getAnimalMap();
module.exports = getAnimalMap;
