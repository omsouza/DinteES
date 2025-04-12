const express = require('express');
const router = express.Router();
const EnderecoController = require('../controllers/enderecoController');

router.get('/', EnderecoController.getAll);
router.get('/:id', EnderecoController.getById);
router.get('/cidade/:cidade', EnderecoController.getByCidade);
//router.get('/uf/:uf', EnderecoController.getByUf);
//router.get('/cep/:cep', EnderecoController.getByCep);
module.exports = router;