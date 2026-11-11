const path = require('path');

try {
  require('dotenv').config({ path: path.join(__dirname, '../.env') });
} catch (e) {}

const serverModule = require('../server.js');
const handler = serverModule.default || serverModule.handler || serverModule;

module.exports = (req, res) => {
  if (req.headers['x-matched-path']) {
    req.url = req.headers['x-matched-path'];
  } else if (req.headers['x-vercel-matched-path']) {
    req.url = req.headers['x-vercel-matched-path'];
  } else if (req.headers['x-forwarded-uri']) {
    req.url = req.headers['x-forwarded-uri'];
  } else if (req.query && (req.query.path || req.query.slug)) {
    const sub = Array.isArray(req.query.slug || req.query.path) ? (req.query.slug || req.query.path).join('/') : (req.query.slug || req.query.path);
    req.url = '/api/' + sub;
  }

  if (typeof handler === 'function') {
    return handler(req, res);
  }
  res.statusCode = 500;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ error: 'Serverless handler failed to load' }));
};
