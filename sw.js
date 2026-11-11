/* Prompt CRAFT service worker — offline support. Bump VERSION when you publish a new index.html. */
const VERSION = 'pc-202611112158';
const CORE = ['./', './index.html', './manifest.webmanifest', './privacy.html', './terms.html', './offline.html',
  './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './favicon.png', './fonts.css', './jszip.min.js',
  './fonts/fredoka-latin-500-normal.woff2', './fonts/fredoka-latin-600-normal.woff2', './fonts/fredoka-latin-700-normal.woff2',
  './fonts/inter-latin-400-normal.woff2', './fonts/inter-latin-500-normal.woff2', './fonts/inter-latin-600-normal.woff2'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Pages: network first so updates arrive, fall back to cache, then the offline page.
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); return r; })
      .catch(() => caches.match(req).then(r => r || caches.match('./index.html')).then(r => r || caches.match('./offline.html'))));
    return;
  }
  // Same-site files and fonts/libraries: cache first, update in the background.
  if (url.origin === location.origin || /fonts\.(googleapis|gstatic)\.com|cdnjs\.cloudflare\.com/.test(url.host)) {
    e.respondWith(caches.match(req).then(hit => {
      const net = fetch(req).then(r => { if (r && (r.ok || r.type === 'opaque')) { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); } return r; }).catch(() => hit);
      return hit || net;
    }));
  }
});
