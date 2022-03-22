const { species } = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');

function Tuesday() {
  // to filtrando os animais q tem tuesday
  const array = species.filter((item) => item.availability.includes('Tuesday'));
  // console.log(array);
  const createArray = array.map((item) => item.name);
  // console.log(createArray); [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ]
  const openT = hours.Tuesday.open;
  // console.log(openT); 8
  const closeT = hours.Tuesday.close;
  // console.log(closeT); 6
  const returned = {
    officeHour: `Open from ${openT}am until ${closeT}pm`,
    exhibition: createArray,
  };
  // console.log(returnTuesday);
  return returned;
}
// console.log(Tuesday());

function Wednesday() {
  const array = species.filter((item) => item.availability.includes('Wednesday'));
  const createArray = array.map((item) => item.name);
  const openT = hours.Wednesday.open;
  const closeT = hours.Wednesday.close;
  const returned = {
    officeHour: `Open from ${openT}am until ${closeT}pm`,
    exhibition: createArray,
  };
  return returned;
}
// console.log(Wednesday());

function Thursday() {
  const array = species.filter((item) => item.availability.includes('Thursday'));
  const createArray = array.map((item) => item.name);
  const openT = hours.Thursday.open;
  const closeT = hours.Thursday.close;
  const returned = {
    officeHour: `Open from ${openT}am until ${closeT}pm`,
    exhibition: createArray,
  };
  return returned;
}
// console.log(Thursday());

function Friday() {
  const array = species.filter((item) => item.availability.includes('Friday'));
  const createArray = array.map((item) => item.name);
  const openT = hours.Friday.open;
  const closeT = hours.Friday.close;
  const returned = {
    officeHour: `Open from ${openT}am until ${closeT}pm`,
    exhibition: createArray,
  };
  return returned;
}
// console.log(Friday());

function Saturday() {
  const array = species.filter((item) => item.availability.includes('Saturday'));
  const createArray = array.map((item) => item.name);
  const openT = hours.Saturday.open;
  const closeT = hours.Saturday.close;
  const returned = {
    officeHour: `Open from ${openT}am until ${closeT}pm`,
    exhibition: createArray,
  };
  return returned;
}
// console.log(Saturday());

function Sunday() {
  const array = species.filter((item) => item.availability.includes('Sunday'));
  const createArray = array.map((item) => item.name);
  const openT = hours.Sunday.open;
  const closeT = hours.Sunday.close;
  const returned = {
    officeHour: `Open from ${openT}am until ${closeT}pm`,
    exhibition: createArray,
  };
  return returned;
}
// console.log(Sunday());

function Monday() {
  const returned = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return returned;
}

function montage() {
  const objeto = {
    Tuesday: Tuesday(),
    Wednesday: Wednesday(),
    Thursday: Thursday(),
    Friday: Friday(),
    Saturday: Saturday(),
    Sunday: Sunday(),
    Monday: Monday(),
  };
  // console.log(objeto);
  return objeto;
}
montage();
// console.log(montage());
// console.log(montage().Monday); { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' }
const montageSave = montage();
const daysString = Object.keys(montage());
// console.log(daysString); // array com os nomes de dias

function animal(scheduleTarget) {
  const array = species.find((item) => item.name.includes(scheduleTarget));
  // console.log(array); // retorna obj do animal(scheduleTarget)
  const createArray = Object.values(array.availability);
  // console.log(createArray); // [ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ] de lions
  return createArray;
}

function getSchedule(scheduleTarget) {
  if (!daysString.includes(scheduleTarget)) {
    // console.log(!daysString.includes(scheduleTarget)); false
    return montageSave; // retorna o objeto
  }
  // if (daysString.includes(scheduleTarget)) {
  //   return { montage()[scheduleTarget]:  };
  // }
  // return animal(scheduleTarget);
  // if (daysString.includes(scheduleTarget)) {
  //   // console.log(daysString.includes(scheduleTarget)); true
  //   // const retorno = montage().find((e) => Object.keys(e) === scheduleTarget);
  //   // console.log(retorno);

  //   return {}; // retorna somente o dia { dia: valor} passado como parametro
  // }
}
console.log(getSchedule());
module.exports = getSchedule;
