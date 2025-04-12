const EnderecoModel = require('../models/enderecoModel');

class EnderecoController {
  static getAll(req, res) {
    const enderecos = EnderecoModel.getAll();
    res.json(enderecos);
  }

  static getById(req, res) {
    const { id } = req.params;
    const endereco = EnderecoModel.getById(id);
    if (endereco) {
      res.json(endereco);
    } else {
      res.status(404).json({ message: 'Endereço por id não encontrado' });
    }
  }

  static getByCidade(req, res) {
    const { cidade } = req.params;
    const enderecos = EnderecoModel.getByCidade(cidade);
    if (enderecos.length > 0) {
      res.json(enderecos);
    } else {
      res.status(404).json({ message: 'Endereço por cidade não encontrado' });
    }
  }

  static getByUf(req, res) {
    const { uf } = req.params;
    const enderecos = EnderecoModel.getByUf(uf);
    if (enderecos.length > 0) {
      res.json(enderecos);
    } else {
      res.status(404).json({ message: 'Endereço por UF não encontrado' });
    }
  }
  
  static getByCep(req, res) {
    const { cep } = req.params;
    const enderecos = EnderecoModel.getByCep(cep);
    if (enderecos.length > 0) {
      res.json(enderecos);
    } else {
      res.status(404).json({ message: 'Endereço por CEP não encontrado' });
    }
  }

}

module.exports = EnderecoController;