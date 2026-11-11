const path = require('path');

try {
  require('dotenv').config({ path: path.join(__dirname, '../.env') });
} catch (e) {}

const serverModule = require('../server.js');
const handler = serverModule.default || serverModule.handler || serverModule;

module.exports = (req, res) => {
  if (typeof handler === 'function') {
    return handler(req, res);
  }
  res.statusCode = 500;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ error: 'Serverless handler failed to load' }));
};
