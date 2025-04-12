const { startServer } = require('./app');

if (process.env.NODE_ENV !== 'test') {
  startServer();
}