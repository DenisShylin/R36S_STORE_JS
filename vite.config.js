// vite.config.js
import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
  // Определяем базовый URL в зависимости от среды
  let baseUrl = '/storejs/';

  // Для режима разработки используем корень
  if (command === 'serve') {
    baseUrl = '/';
  }

  // Для продакшн на GitHub Pages может потребоваться другой base
  if (mode === 'github') {
    baseUrl = '/R36S_STORE_JS/';
  }

  console.log(`Building for mode: ${mode} with base: ${baseUrl}`);

  return {
    base: baseUrl,
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
        '@locales': resolve(__dirname, './public/locales'),
        '@partials': resolve(__dirname, './src/partials'),
      },
    },
    build: {
      sourcemap: true,
      assetsInlineLimit: 0, // Не преобразовывать маленькие файлы в data URI
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'src/index.html'), // Основной английский
          ar: resolve(__dirname, 'src/ar/index.html'), // Арабский (вместо en)
          ru: resolve(__dirname, 'src/ru/index.html'),
          tr: resolve(__dirname, 'src/tr/index.html'),
          uk: resolve(__dirname, 'src/uk/index.html'),
          nl: resolve(__dirname, 'src/nl/index.html'),
          fr: resolve(__dirname, 'src/fr/index.html'),
          de: resolve(__dirname, 'src/de/index.html'),
          it: resolve(__dirname, 'src/it/index.html'),
          pt: resolve(__dirname, 'src/pt/index.html'),
          es: resolve(__dirname, 'src/es/index.html'),
          tg: resolve(__dirname, 'src/tg/index.html'),
          uz: resolve(__dirname, 'src/uz/index.html'),
          be: resolve(__dirname, 'src/be/index.html'),
          ky: resolve(__dirname, 'src/ky/index.html'),
        },
        output: {
          manualChunks(id) {
            // Выделяем код vendor в отдельные чанки
            if (id.includes('node_modules')) {
              return 'vendor';
            }

            // Выделяем основные модули в отдельные чанки
            if (id.includes('/js/core/')) {
              return 'core';
            }

            if (id.includes('/js/i18n/')) {
              return 'i18n';
            }

            if (id.includes('/js/utils/')) {
              return 'utils';
            }

            if (id.includes('/js/schemas/')) {
              return 'schemas';
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
        // Используем абсолютный путь для поиска partials
        includeInjectedFolder: resolve(__dirname, 'src/partials'),
        // Добавляем дополнительную конфигурацию для лучшей поддержки путей
        includeFileFolder: resolve(__dirname, 'src'),
        // Добавляем опции для поиска файлов по относительным путям
        options: {
          root: resolve(__dirname, 'src'),
          includeBase: true,
        },
      }),
      FullReload(['**/*.html', '**/*.json']),
    ],
    css: {
      postcss: {
        plugins: [
          autoprefixer({}), // Добавляем автопрефиксер для кросс-браузерности
        ],
      },
      devSourcemap: true, // Source maps для CSS в режиме разработки
    },
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
      // Добавляем настройки для правильной обработки статических файлов
      headers: {
        'Cache-Control': 'no-store',
      },
    },
    preview: {
      // Настройки для режима предпросмотра
      port: 5175,
      host: true,
      open: true,
    },
    optimizeDeps: {
      include: ['i18next'], // Необходимые зависимости
    },
    logLevel: 'info', // 'info', 'warn', 'error', 'silent'
    clearScreen: false, // Не очищать экран консоли при перезагрузке
  };
});
