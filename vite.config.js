import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Вспомогательная функция для копирования директорий рекурсивно при сборке
function copyDirectory(source, destination) {
  // Создаем директорию назначения, если она не существует
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  // Читаем исходную директорию
  const files = fs.readdirSync(source);

  // Копируем каждый файл/директорию
  for (const file of files) {
    const sourcePath = path.join(source, file);
    const destPath = path.join(destination, file);

    // Получаем статистику файла
    const stats = fs.statSync(sourcePath);

    if (stats.isDirectory()) {
      // Рекурсивно копируем поддиректории
      copyDirectory(sourcePath, destPath);
    } else {
      // Копируем файл
      fs.copyFileSync(sourcePath, destPath);
    }
  }
}

export default defineConfig(({ mode }) => {
  // Определяем базовый путь для GitHub Pages
  const isProd = mode === 'production';
  const base = isProd ? '/R36S_STORE_JS/' : '/';

  // Пользовательский плагин для копирования HTML-фрагментов в dist
  const copyHtmlFragmentsPlugin = {
    name: 'copy-html-fragments',
    closeBundle: () => {
      if (isProd) {
        // Копируем HTML-файлы секций в dist
        const sectionsDir = resolve(__dirname, './src/sections');
        const destSectionsDir = resolve(__dirname, './dist/sections');

        if (fs.existsSync(sectionsDir)) {
          copyDirectory(sectionsDir, destSectionsDir);
          console.log('✓ Скопированы HTML-фрагменты секций в dist/sections');
        }

        // Копируем HTML-файлы компонентов в dist
        const componentsDir = resolve(__dirname, './src/components');
        const destComponentsDir = resolve(__dirname, './dist/components');

        if (fs.existsSync(componentsDir)) {
          copyDirectory(componentsDir, destComponentsDir);
          console.log(
            '✓ Скопированы HTML-фрагменты компонентов в dist/components'
          );
        }
      }
    },
  };

  return {
    // Базовый путь для GitHub Pages
    base,

    // Устанавливаем корень проекта в директорию src
    root: 'src',

    // Настраиваем разрешение путей
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '~@': resolve(__dirname, './src'),
        // Настраиваем алиасы для абсолютных импортов
        '/sections': resolve(__dirname, './src/sections'),
        '/components': resolve(__dirname, './src/components'),
        '/js': resolve(__dirname, './src/js'),
        '/assets': resolve(__dirname, './src/assets'),
        '/img': resolve(__dirname, './src/assets/img'),
        '/public': resolve(__dirname, './public'),
        '/video': resolve(__dirname, './src/assets/video'),
        '/src': resolve(__dirname, './src'),
      },
    },

    // Публичная директория относительно корня проекта, не корня src
    publicDir: resolve(__dirname, './public'),

    // Включаем различные типы ресурсов
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
      '**/*.html', // Включаем HTML-фрагменты
    ],

    // Конфигурация сервера разработки
    server: {
      port: 5173,
      open: true,
      host: true,
      // Разрешаем доступ к файлам вне корневой директории src
      fs: {
        allow: ['.', '..'],
      },
    },

    // Конфигурация сборки
    build: {
      // Путь относительно корня src
      outDir: '../dist',
      assetsDir: 'assets',
      minify: 'esbuild',
      sourcemap: mode === 'development',
      emptyOutDir: true,
      cssCodeSplit: true,

      // Настраиваем опции Rollup
      rollupOptions: {
        input: {
          main: resolve(__dirname, './src/index.html'),
        },
        output: {
          // Устанавливаем правильный формат вывода
          format: 'es',
          // Фиксируем имя файла main.js для избежания хеша
          entryFileNames: chunkInfo => {
            return chunkInfo.name === 'main'
              ? 'js/main.js'
              : 'assets/js/[name].[hash].js';
          },
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'assets/js/[name].[hash].js',
        },
      },

      target: 'es2015',
    },

    // Добавляем пользовательские плагины
    plugins: [copyHtmlFragmentsPlugin],
  };
});
