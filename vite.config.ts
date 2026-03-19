import { defineConfig } from 'vite';

export default defineConfig({
  base: '/hh-school-infrastructure/',
  root: 'testScript/src',
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
  },
});
