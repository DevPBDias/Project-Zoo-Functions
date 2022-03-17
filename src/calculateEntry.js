const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const entrantPeople = {};
  const countPeopleAge = entrants.map((elemento) => elemento.age);
  const countChildAge = countPeopleAge.filter((elemento) => elemento < 18);
  const countAdultAge = countPeopleAge.filter((elemento) => elemento < 18);
  const countSeniorAge = countPeopleAge.filter((elemento) => elemento < 18);
  entrantPeople.child = countChildAge.length;
  entrantPeople.child = countChildAge.length;
  entrantPeople.child = countChildAge.length;
}

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
