import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
  return {
    base: '/R36S_STORE_JS/',
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    publicDir: 'assets',
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@assets': resolve(__dirname, './src/assets'),
        '@js': resolve(__dirname, './src/js'),
        '@css': resolve(__dirname, './src/css'),
        '@locales': resolve(__dirname, './src/locales'), // Добавляем алиас для локализаций
      },
    },
    assetsInclude: ['**/*.json'], // Добавляем поддержку JSON файлов
    build: {
      sourcemap: true,
      rollupOptions: {
        input: resolve(__dirname, 'src/index.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'js/[name]-[hash].js',
          chunkFileNames: 'js/[name]-[hash].js',
          assetFileNames: ({ name }) => {
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
              return 'assets/images/[name]-[hash][extname]';
            }
            if (/\.css$/.test(name ?? '')) {
              return 'css/[name]-[hash][extname]';
            }
            if (/\.json$/.test(name ?? '')) {
              // Добавляем обработку JSON файлов
              return 'locales/[name]-[hash][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
      outDir: '../dist',
      emptyOutDir: true,
    },
    plugins: [
      injectHTML({
        inject: {
          data: {},
        },
      }),
      FullReload(['**/*.html', '**/*.json']), // Добавляем слежение за JSON файлами
    ],
    css: {
      postcss: {
        plugins: [
          SortCss({
            sort: 'mobile-first',
          }),
        ],
      },
    },
    server: {
      host: true,
      port: 5174,
      open: true,
      watch: {
        usePolling: true,
      },
    },
  };
});
