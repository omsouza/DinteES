const enderecos = require('../data/enderecos.json');

class EnderecoModel {
  static getAll() {
    return enderecos;
  }


}

module.exports = EnderecoModel;