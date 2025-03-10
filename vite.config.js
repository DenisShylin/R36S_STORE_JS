import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/r32s/' : '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  publicDir: 'public',
  assetsInclude: ['**/*.MP4', '**/*.mp4', '**/*.webm', '**/*.gif', '**/*.ico'],

  server: {
    port: 5173, // Порт изменился на 5173 (вижу в адресной строке браузера)
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
        main: resolve(__dirname, 'src/index.html'), // Правильное место для входного файла
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
