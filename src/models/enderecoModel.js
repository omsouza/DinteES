const enderecos = require('../data/enderecos.json');

class EnderecoModel {
  static getAll() {
    return enderecos;
  }

  static getById(id) {

    enderecos.forEach((endereco) => {
      console.log(endereco.id);
    });
    const endereco = enderecos.find((endereco) => endereco.id == id);
    
    if (endereco) {
      console.log(endereco);
    } else {
      console.log('Endereco not found');
    }
    return endereco || null;
  }

  //cidade, uf e cep

  static getByCidade(cidade) {
    console.log(cidade);
    return enderecos.filter((endereco) => endereco.cidade.toLowerCase() == cidade.toLowerCase());
  }

  /*static getByUf(uf) {
    return enderecos.filter((endereco) => endereco.uf.toLowerCase() == uf.toLowerCase());
  }

  static getByCep(cep) {
    return enderecos.filter((endereco) => endereco.cep.toLowerCase() == cep.toLowerCase());
  }*/

}

module.exports = EnderecoModel;