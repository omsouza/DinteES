const EnderecoModel = require('../models/enderecoModel');

class EnderecoController {
  static getAll(req, res) {
    const enderecos = EnderecoModel.getAll();
    res.json(enderecos);
  }

}

module.exports = EnderecoController;