const path = require('path');

try {
  require('dotenv').config({ path: path.join(__dirname, '../.env') });
} catch (e) {}

const serverModule = require('../server.js');
const handler = serverModule.default || serverModule.handler || serverModule;

function resolvePath(req) {
  const parsed = new URL(req.url || '/', 'http://localhost');
  const slugFromParam = (req.query && (req.query.slug || req.query.path)) || parsed.searchParams.get('slug') || parsed.searchParams.get('path');
  if (slugFromParam) {
    const sub = Array.isArray(slugFromParam) ? slugFromParam.join('/') : slugFromParam;
    return '/api/' + sub.replace(/^\/+/, '');
  }

  let raw = parsed.pathname || '';
  if (raw.startsWith('/api/') && raw !== '/api/' && !raw.startsWith('/api/index') && !raw.startsWith('/api/[...')) {
    return raw;
  }

  const orig = req.headers['x-forwarded-url'] || req.headers['x-original-url'];
  if (orig && orig.startsWith('/api/') && !orig.startsWith('/api/index') && !orig.startsWith('/api/[...')) {
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
