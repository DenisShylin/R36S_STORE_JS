import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
  return {
    base: '/R36S_STORE_JS/',
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    publicDir: '../public',
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@assets': resolve(__dirname, './src/assets'),
        '@js': resolve(__dirname, './src/js'),
        '@css': resolve(__dirname, './src/css'),
        '@locales': resolve(__dirname, './src/locales'),
      },
    },
    build: {
      sourcemap: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'src/index.html'),
        },
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
              return 'locales/[name][extname]';
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
      FullReload(['**/*.html', '**/*.json']),
    ],
    server: {
      host: true,
      port: 5174,
      open: true,
      watch: {
        usePolling: true,
      },
      fs: {
        strict: false,
        allow: ['..'],
      },
    },
    optimizeDeps: {
      include: ['i18next'],
    },
  };
});
