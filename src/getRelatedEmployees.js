const { employees } = require('../data/zoo_data');

// includes() encontra um conj. de caracteres dentro de outra string, retornando true ou false
function isManager(id) {
  // const managers = [stephanieId, olaId, burlId];
  const managersOrNot = employees.some((elemento) => elemento.managers.includes(id));
  return managersOrNot;
}
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992')); true

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    // console.log(managerId); id do manager: 9e7d4524-363c-416a-8759-8aa7e50c0992
    const names = employees.filter((elemento) => elemento.managers.includes(managerId));
    // console.log(names); mostra os objetos dos trabalhadores q trabalham para aquele manager
    const retorno = names.map((elemento) => `${elemento.firstName} ${elemento.lastName}`);
    // console.log(retorno); [ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ]
    return retorno;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  // retorna um erro se não for uma pessoa colaboradora gerente
}
getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992');
// utiliza a função isManager
// se true, nomes das pessoas q ele é responsavel
// retorna array com nome e sobrenome => template literals? da pessoas gerenciadas
// se false, erro throw new Error("O id inserido não é de uma pessoa colaboradora gerente!")

module.exports = { isManager, getRelatedEmployees };
