import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/R36S_STORE_JS/' : '/', // Измените на название вашего репозитория
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '/sections': resolve(__dirname, './src/sections'),
      '/components': resolve(__dirname, './src/components'),
    },
  },
  publicDir: 'public',
  assetsInclude: ['**/*.MP4', '**/*.mp4', '**/*.webm', '**/*.gif', '**/*.ico'],

  server: {
    port: 5173,
    open: true,
    host: true,
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'esbuild',
    sourcemap: mode === 'development',
    emptyOutDir: true,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Проверьте, что index.html находится в корне проекта
      },
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/js/[name].[hash].js',
        entryFileNames: 'assets/js/[name].[hash].js',
      },
    },
    target: 'es2015',
  },
}));
