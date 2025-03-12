import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => ({
  // Исправленный базовый путь для GitHub Pages
  base: mode === 'production' ? '/R36S_STORE_JS/' : '/',

  // Указываем корневую директорию проекта
  root: 'src',

  // Настраиваем разрешение путей
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~@': resolve(__dirname, './src'),
      // Настраиваем алиасы для абсолютных импортов начинающихся с /
      '/sections': resolve(__dirname, './src/sections'),
      '/components': resolve(__dirname, './src/components'),
      '/js': resolve(__dirname, './src/js'),
      '/assets': resolve(__dirname, './src/assets'),
      // Добавляем прямой алиас для изображений
      '/img': resolve(__dirname, './src/assets/img'),
      // Добавим новые алиасы для медиафайлов
      '/public': resolve(__dirname, './public'),
      '/video': resolve(__dirname, './src/assets/video'),
      // Алиас для корня src, чтобы путь /src/... работал
      '/src': resolve(__dirname, './src'),
    },
  },

  // Публичная директория относительно корня проекта, а не корня src
  publicDir: resolve(__dirname, './public'),
  assetsInclude: [
    '**/*.MP4',
    '**/*.mp4',
    '**/*.webm',
    '**/*.gif',
    '**/*.ico',
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.svg',
  ],

  server: {
    port: 5173,
    open: true,
    host: true,
    // Разрешаем доступ к файлам вне корневой директории src
    fs: {
      allow: ['.', '..'],
    },
  },

  build: {
    // Путь относительно корня src, т.к. root: 'src'
    outDir: '../dist',
    assetsDir: 'assets',
    minify: 'esbuild',
    sourcemap: mode === 'development',
    emptyOutDir: true,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        // index.html берется автоматически из корня (src), не нужно указывать
        main: resolve(__dirname, './src/index.html'),
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
