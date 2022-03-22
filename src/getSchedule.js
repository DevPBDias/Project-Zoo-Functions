const { species } = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');

function Monday(scheduleTarget) {
  const returned = {
    [scheduleTarget]: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    },
  };
  return returned;
}
// console.log(Monday('Monday')); //{Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' }}

function MondayNoName() {
  const returned = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return returned;
}

function specificDay(scheduleTarget) {
  const openT = hours[scheduleTarget].open;
  const closeT = hours[scheduleTarget].close;
  const array = species.filter((item) => item.availability.includes(scheduleTarget));
  const createArray = array.map((item) => item.name);
  const info = {
    [scheduleTarget]: {
      officeHour: `Open from ${openT}am until ${closeT}pm`,
      exhibition: createArray,
    },
  };
  return info;
}
// console.log(specificDay('Wednesday')); // traz o obj do dia com suas chaves/valores

function specificDayNoDay(scheduleTarget) {
  const openT = hours[scheduleTarget].open;
  const closeT = hours[scheduleTarget].close;
  const array = species.filter((item) => item.availability.includes(scheduleTarget));
  const createArray = array.map((item) => item.name);
  const info = {
    officeHour: `Open from ${openT}am until ${closeT}pm`,
    exhibition: createArray,
  };
  return info;
}
// console.log(specificDayNoDay('Tuesday')); // traz o obj especifico pra aquele dia mas sem  a key(dia)

function noDayParameter() {
  const objeto = {
    Tuesday: specificDayNoDay('Tuesday'),
    Wednesday: specificDayNoDay('Wednesday'),
    Thursday: specificDayNoDay('Thursday'),
    Friday: specificDayNoDay('Friday'),
    Saturday: specificDayNoDay('Saturday'),
    Sunday: specificDayNoDay('Sunday'),
    Monday: MondayNoName(),
  };
  // console.log(objeto);
  return objeto;
}

function animal(scheduleTarget) {
  const array = species.find((item) => item.name.includes(scheduleTarget));
  console.log(array); // retorna obj do animal(scheduleTarget)
  const createArray = Object.values(array.availability);
  // console.log(createArray); // [ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ] de lions
  return createArray;
}

const montageSave = noDayParameter();
const daysString = Object.keys(noDayParameter());

function getSchedule(scheduleTarget) {
  const animalCond = species.some((elemento) => elemento.name === scheduleTarget);
  if (animalCond === true) {
    return animal(scheduleTarget);
  }
  if (!daysString.includes(scheduleTarget)) {
    // console.log(!daysString.includes(scheduleTarget)); false
    return montageSave; // retorna o objeto
  }
  if (scheduleTarget === 'Monday') {
    return Monday(scheduleTarget);
  }
  if (daysString.includes(scheduleTarget)) {
    return specificDay(scheduleTarget);
  }
}

getSchedule();
module.exports = getSchedule;
