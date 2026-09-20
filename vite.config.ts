import type { IncomingMessage, ServerResponse } from 'node:http';
import { defineConfig, type Plugin } from 'vite';
import tailwindcss from '@tailwindcss/vite';

// Archived previews run in sandboxed frames. Their opaque origin can only load the
// local font files with CORS, so those files alone are readable from any origin.
function allowArchiveFonts(request: IncomingMessage, response: ServerResponse, next: () => void): void {
  if (/^\/archive\/[^?]*\.(woff2?|ttf|otf)(\?|$)/.test(request.url ?? ''))
    response.setHeader('Access-Control-Allow-Origin', '*');
  next();
}
const archiveFonts: Plugin = {
  name: 'archive-font-cors',
  configureServer: server => void server.middlewares.use(allowArchiveFonts),
  configurePreviewServer: server => void server.middlewares.use(allowArchiveFonts),
};

export default defineConfig({
  plugins: [tailwindcss(), archiveFonts],
  server: { host: '127.0.0.1', port: 5173, strictPort: true },
});
