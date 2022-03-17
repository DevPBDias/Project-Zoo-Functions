const { employees } = require('../data/zoo_data');

function isManager(id) {
  // const managers = [stephanieId, olaId, burlId];
  const managersOrNot = employees.some((elemento) => elemento.managers.includes(id));
  return managersOrNot;
}
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// verifica se gerente ou nao, retorna true ou false

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    // console.log(managerId);
    const names = employees.filter((elemento) => elemento.managers.includes(managerId));
    // console.log(names);
    const retorno = names.map((elemento) => `${elemento.firstName} ${elemento.lastName}`);
    // console.log(retorno);
    return retorno;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992');

// utiliza a função isManager
// se true, nomes das pessoas q ele é responsavel
// retorna array com nome e sobrenome => template literals? da pessoas gerenciadas
// se false, erro throw new Error("O id inserido não é de uma pessoa colaboradora gerente!")

module.exports = { isManager, getRelatedEmployees };
