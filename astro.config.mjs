import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({
  site: 'https://lerma-dev.github.io',
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@icons': fileURLToPath(new URL('./src/assets/icons', import.meta.url)),
        '@styles': fileURLToPath(new URL('./src/assets/styles', import.meta.url)),
        '@lib': fileURLToPath(new URL('./src/lib', import.meta.url)),
      }
    }
  }
});