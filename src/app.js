const express = require('express');
const enderecoRoutes = require('./routes/enderecoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/enderecos', enderecoRoutes);

const startServer = () => {
  return app.listen(PORT, () => {
    if (process.env.NODE_ENV !== 'test') {
      console.log(`Servidor rodando na porta ${PORT}`);
    }
  });
};

module.exports = { app, startServer };