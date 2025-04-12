const express = require('express');
const router = express.Router();
const EnderecoController = require('../controllers/enderecoController');

router.get('/', EnderecoController.getAll);
module.exports = router;