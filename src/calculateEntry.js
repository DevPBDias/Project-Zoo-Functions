const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(array) {
  const participantes = {};
  const participantesIdade = array.map((elemento) => elemento.age);
  // console.log(participantesIdade); [ 5, 5, 5, 18, 18, 50 ]
  const numCrianca = participantesIdade.filter((criança) => criança < 18);
  // console.log(numCrianca); [ 5, 5, 5 ]
  const numAdultoIdade = participantesIdade.filter((adulto) => adulto >= 18 && adulto < 50);
  // console.log(numAdultoIdade); [ 18, 18 ]
  const numVovoIdade = participantesIdade.filter((vovo) => vovo >= 50);
  // console.log(numVovoIdade); [ 50 ]
  participantes.child = numCrianca.length;
  // console.log(numCrianca.length); 3
  participantes.adult = numAdultoIdade.length;
  // console.log(numAdultoIdade.length); 2
  participantes.senior = numVovoIdade.length;
  // console.log(numVovoIdade.length); 1
  // console.log(participantes); { child: 3, adult: 2, senior: 1 }
  return participantes;
}

function calculateEntry(array) {
  if (!array) {
    return 0;
  }
  if (Object.keys(array).length === 0) {
    return 0;
  }
  const callback = countEntrants(array);
  const ticketCrianca = callback.child * prices.child;
  const ticketAdulto = callback.adult * prices.adult;
  const ticketSVovo = callback.senior * prices.senior;
  return ticketCrianca + ticketAdulto + ticketSVovo;
}
calculateEntry();

module.exports = { calculateEntry, countEntrants };
