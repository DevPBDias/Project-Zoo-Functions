const { species } = require('../data/zoo_data');
// destruturação do obj para acessar somente a propriedade especies que tem um array de obejtos como valor

function getSpeciesByIds(...array) {
  // filtrou o array para encontrar o elemento com id identico passado como parametro
  const idSpecies = species.filter((item) => array.find((itemF) => itemF === item.id));
  // console.log(idSpecies); retorna objeto referente aquele id passado como parametro
  return idSpecies;
}

getSpeciesByIds();
module.exports = getSpeciesByIds;

// condicional parametro vazio [] ou nao
// usa ... ?  para receber mais parametros ids
// Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id
