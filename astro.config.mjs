import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://oncofabric.com',
  output: 'static',
  build: {
    assets: 'assets',
  },
});
