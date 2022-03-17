const data = require('../data/zoo_data');

// Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.

function getSpeciesByIds(...array) {
  return data.species.filter((elemento) => {
    return array.find((elementFind) => elementFind === elemento.id);
  });
}

getSpeciesByIds();
module.exports = getSpeciesByIds;

// condicional parametro vazio [] ou nao
// usa ... ?  para receber mais parametros ids
// Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id
