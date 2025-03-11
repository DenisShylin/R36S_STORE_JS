import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => ({
  // Исправленный базовый путь для GitHub Pages
  base: mode === 'production' ? '/R36S_STORE_JS/' : '/',

  // Указываем корневую директорию проекта
  root: './src',

  // Настраиваем разрешение путей
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      // Настраиваем алиасы для абсолютных импортов начинающихся с /
      '/sections': resolve(__dirname, './src/sections'),
      '/components': resolve(__dirname, './src/components'),
      '/js': resolve(__dirname, './src/js'),
      '/assets': resolve(__dirname, './src/assets'),
    },
  },

  publicDir: resolve(__dirname, './public'),
  assetsInclude: ['**/*.MP4', '**/*.mp4', '**/*.webm', '**/*.gif', '**/*.ico'],

  server: {
    port: 5173,
    open: true,
    host: true,
  },

  build: {
    // Исправление пути выходной директории
    outDir: resolve(__dirname, './dist'),
    assetsDir: 'assets',
    minify: 'esbuild',
    sourcemap: mode === 'development',
    emptyOutDir: true,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, './src/index.html'), // Правильный путь к index.html
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
