const path = require('path');

try {
  require('dotenv').config({ path: path.join(__dirname, '../faithfest/.env') });
} catch (e) {}

const serverModule = require('../faithfest/server.js');
const handler = serverModule.default || serverModule.handler || serverModule;

function resolvePath(req) {
  // If slug or path is provided by Vercel rewrite or query parameter
  if (req.query && (req.query.slug || req.query.path)) {
    const s = req.query.slug || req.query.path;
    const sub = Array.isArray(s) ? s.join('/') : s;
    return '/api/' + sub.replace(/^\/+/, '');
  }

  let raw = req.url || '';
  if (raw.includes('?')) {
    raw = raw.slice(0, raw.indexOf('?'));
  }

  // If already a specific API route (not the file runner itself)
  if (raw.startsWith('/api/') && raw !== '/api/' && !raw.startsWith('/api/index') && !raw.startsWith('/api/[...')) {
    return raw;
  }

  // Check original headers if available
  const orig = req.headers['x-forwarded-url'] || req.headers['x-original-url'];
  if (orig && orig.startsWith('/api/') && orig !== '/api/' && !orig.startsWith('/api/index') && !orig.startsWith('/api/[...')) {
    return orig.includes('?') ? orig.slice(0, orig.indexOf('?')) : orig;
  }

  return raw || '/api/health';
}

module.exports = (req, res) => {
  const resolved = resolvePath(req);
  if (req.url && req.url.includes('?') && !resolved.includes('?')) {
    req.url = resolved + req.url.slice(req.url.indexOf('?'));
  } else {
    req.url = resolved;
  }

  if (typeof handler === 'function') {
    return handler(req, res);
  }
  res.statusCode = 500;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ error: 'Serverless handler failed to load' }));
};
