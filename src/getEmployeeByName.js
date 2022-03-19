const { employees } = require('../data/zoo_data');

function getEmployeeByName(array) {
  const objeto = {};
  if (array === undefined) {
    return objeto;
    // notação se nao receber nenhum parametro, retonar obj vazio
  }
  const findEmployee = employees.find((f) => array === f.firstName || array === f.lastName);
  // console.log(findEmployee); mostra o obj que contem firstName ou lastName como valor das propriedades
  return findEmployee;
}

getEmployeeByName();
module.exports = getEmployeeByName;
// buscar o nome do responsavel (primeiro || ultimo nome)
// array vazio
// retornar o obj do employees
