const { employees } = require('../data/zoo_data');

function getEmployeeByName(array) {
  const objeto = {};
  if (array === undefined) {
    return objeto;
  }
  return employees.find((f) => array === f.firstName || array === f.lastName);
}

getEmployeeByName();
module.exports = getEmployeeByName;
// buscar o nome do responsavel (primeiro || ultimo nome)
// array vazio
// retornar o obj do employees
