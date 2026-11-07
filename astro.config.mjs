import { existsSync } from 'node:fs';
import { join } from 'node:path';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

/**
 * Vercel serves public/wafi/index.html at /wafi/ (and vercel.json redirects /wafi there, so the page's
 * relative links work), but Astro's dev server only serves files in public/ at their exact path.
 * This makes the dev server behave like Vercel for every public/<folder>/index.html.
 * @type {import('astro').AstroIntegration}
 */
const publicFolderPages = {
  name: 'public-folder-pages',
  hooks: {
    'astro:server:setup': ({ server }) => {
      server.middlewares.use((request, response, next) => {
        const { pathname, search } = new URL(request.url ?? '/', 'http://localhost');
        // A single leading slash keeps the redirect on this site.
        const folder = pathname.replace(/^\/+/, '/').replace(/\/?$/, '/');

        if (folder === '/' || !existsSync(join(server.config.publicDir, folder, 'index.html'))) {
          next();
        } else if (pathname !== folder) {
          response.writeHead(308, { Location: folder + search }).end();
        } else {
          request.url = `${folder}index.html${search}`;
          next();
        }
      });
    },
  },
};

export default defineConfig({
  site: 'https://s-azami.vercel.app',
  output: 'static',
  integrations: [sitemap(), publicFolderPages],
  build: {
    // The stylesheet is small: inlining it removes a render-blocking request.
    inlineStylesheets: 'always',
  },
});
