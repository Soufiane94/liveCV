import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://s-azami.vercel.app',
  output: 'static',
  integrations: [sitemap()],
  build: {
    // Single-page site: inlining the small stylesheet removes a render-blocking request.
    inlineStylesheets: 'always',
  },
});
