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

  // Пользовательский плагин для копирования HTML-фрагментов и CSS в dist
  const copyHtmlAndCssPlugin = {
    name: 'copy-html-and-css-fragments',
    closeBundle: () => {
      if (isProd) {
        // Копируем HTML-файлы и CSS секций в dist
        const sectionsDir = resolve(__dirname, './src/sections');
        const destSectionsDir = resolve(__dirname, './dist/sections');

        if (fs.existsSync(sectionsDir)) {
          copyDirectory(sectionsDir, destSectionsDir);
          console.log(
            '✓ Скопированы HTML-фрагменты и CSS секций в dist/sections'
          );
        }

        // Копируем HTML-файлы и CSS компонентов в dist
        const componentsDir = resolve(__dirname, './src/components');
        const destComponentsDir = resolve(__dirname, './dist/components');

        if (fs.existsSync(componentsDir)) {
          copyDirectory(componentsDir, destComponentsDir);
          console.log(
            '✓ Скопированы HTML-фрагменты и CSS компонентов в dist/components'
          );
        }

        // Копируем основные CSS файлы в dist
        const srcIndexCss = resolve(__dirname, './src/index.css');
        const destIndexCss = resolve(__dirname, './dist/index.css');

        if (fs.existsSync(srcIndexCss)) {
          fs.copyFileSync(srcIndexCss, destIndexCss);
          console.log('✓ Скопирован index.css в dist');
        }
      }
    },
  };

  // Плагин для обеспечения наличия main.js и исправления путей в CSS
  const ensureFilesAndFixPathsPlugin = {
    name: 'ensure-files-and-fix-paths',
    closeBundle: async () => {
      if (isProd) {
        // Проверить наличие main.js в выводе
        const mainJsPath = resolve(__dirname, './dist/assets/js/main.js');
        const mainJsDir = resolve(__dirname, './dist/assets/js');

        if (!fs.existsSync(mainJsDir)) {
          fs.mkdirSync(mainJsDir, { recursive: true });
        }

        if (!fs.existsSync(mainJsPath)) {
          console.log('⚠️ main.js не найден, создаем вручную...');

          // Используем исходный main.js если он существует
          const srcMainJs = resolve(__dirname, './src/assets/js/main.js');
          if (fs.existsSync(srcMainJs)) {
            fs.copyFileSync(srcMainJs, mainJsPath);
            console.log('✓ Скопирован main.js из исходников');
          } else {
            // Или создаем минимальный main.js
            const mainJsContent = `
// Минимальная версия main.js
import './App.js';
console.log('Main.js загружен');
            `;
            fs.writeFileSync(mainJsPath, mainJsContent);
            console.log('✓ Создан новый main.js');
          }
        }

        // Пути для App.js
        const srcAppJs = resolve(__dirname, './src/App.js');
        const destAppJs = resolve(__dirname, './dist/assets/js/App.js');

        // Если App.js существует, копируем его
        if (fs.existsSync(srcAppJs) && !fs.existsSync(destAppJs)) {
          fs.copyFileSync(srcAppJs, destAppJs);
          console.log('✓ Скопирован App.js');
        }

        // Исправление путей в index.html
        const indexHtmlPath = resolve(__dirname, './dist/index.html');
        if (fs.existsSync(indexHtmlPath)) {
          let htmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');

          // Обновляем путь к main.js
          htmlContent = htmlContent.replace(
            /<script type="module" src="\.\/main\.js"><\/script>/g,
            '<script type="module" src="./assets/js/main.js"></script>'
          );

          // Исправляем пути к CSS файлам, добавляя базовый путь для GitHub Pages
          htmlContent = htmlContent.replace(
            /(href="\.\/sections\/)/g,
            `href="${base}sections/`
          );
          htmlContent = htmlContent.replace(
            /(href="\.\/components\/)/g,
            `href="${base}components/`
          );
          htmlContent = htmlContent.replace(
            /(href="\.\/index\.css")/g,
            `href="${base}index.css"`
          );

          // Вставляем вместо неправильного импорта правильный скрипт main.js
          htmlContent = htmlContent.replace(
            /export default ["']\/R36S_STORE_JS\/assets\/index\.[^"']+\.html["'];?/g,
            ''
          );

          fs.writeFileSync(indexHtmlPath, htmlContent);
          console.log('✓ Обновлены пути в index.html');
        }

        // Исправление путей в CSS файлах
        const fixCssPaths = dir => {
          if (!fs.existsSync(dir)) return;

          const files = fs.readdirSync(dir, { withFileTypes: true });

          for (const file of files) {
            const fullPath = path.join(dir, file.name);

            if (file.isDirectory()) {
              fixCssPaths(fullPath);
            } else if (file.name.endsWith('.css')) {
              let cssContent = fs.readFileSync(fullPath, 'utf8');

              // Исправляем url() в CSS, добавляя базовый путь
              cssContent = cssContent.replace(
                /url\(['"]?(\/[^'")]+)['"]?\)/g,
                `url('${base}$1')`
              );

              // Исправляем относительные пути в url() для разных уровней вложенности
              if (
                fullPath.includes('/sections/') ||
                fullPath.includes('/components/')
              ) {
                cssContent = cssContent.replace(
                  /url\(['"]?(\.\.\/img\/[^'")]+)['"]?\)/g,
                  `url('${base}img/$1')`
                );
              }

              fs.writeFileSync(fullPath, cssContent);
              console.log(`✓ Исправлены пути в: ${fullPath}`);
            }
          }
        };

        // Исправляем пути в CSS файлах в директориях
        fixCssPaths(resolve(__dirname, './dist/sections'));
        fixCssPaths(resolve(__dirname, './dist/components'));
        fixCssPaths(resolve(__dirname, './dist'));

        // Новая проверка: если есть хешированный index.html в assets, копируем его в корень
        const assetsDir = resolve(__dirname, './dist/assets');
        if (fs.existsSync(assetsDir)) {
          const files = fs.readdirSync(assetsDir);
          const indexHtmlInAssets = files.find(
            file => file.startsWith('index') && file.endsWith('.html')
          );

          if (indexHtmlInAssets) {
            const indexInAssetsPath = resolve(assetsDir, indexHtmlInAssets);
            const rootIndexPath = resolve(__dirname, './dist/index.html');

            // Читаем содержимое файла из assets
            let indexContent = fs.readFileSync(indexInAssetsPath, 'utf-8');

            // Удаляем любые export default директивы
            indexContent = indexContent.replace(
              /export default ["']\/R36S_STORE_JS\/assets\/[^"']+["'];?/g,
              ''
            );

            // Исправляем пути к CSS файлам
            indexContent = indexContent.replace(
              /(href="\.\/sections\/)/g,
              `href="${base}sections/`
            );
            indexContent = indexContent.replace(
              /(href="\.\/components\/)/g,
              `href="${base}components/`
            );
            indexContent = indexContent.replace(
              /(href="\.\/index\.css")/g,
              `href="${base}index.css"`
            );

            // Проверяем, есть ли ссылка на main.js
            if (!indexContent.includes('main.js')) {
              indexContent = indexContent.replace(
                '</body>',
                `<script type="module" src="${base}assets/js/main.js"></script>\n</body>`
              );
            }

            // Записываем в корень dist
            fs.writeFileSync(rootIndexPath, indexContent);
            console.log(
              `✓ Скопирован и исправлен ${indexHtmlInAssets} в корень как index.html`
            );
          }
        }
      }
    },
  };

  // Плагин для исправления проблемы с экспортом по умолчанию и путями в HTML
  const fixExportDefaultAndPathsPlugin = {
    name: 'fix-export-default-and-paths-plugin',
    transformIndexHtml(html) {
      // Удаляем любые экспорты по умолчанию из HTML
      let fixedHtml = html.replace(
        /export default ["']\/R36S_STORE_JS\/assets\/[^"']+["'];?/g,
        ''
      );

      // Исправляем пути к CSS для GitHub Pages
      if (isProd) {
        fixedHtml = fixedHtml.replace(
          /(href="\.\/sections\/)/g,
          `href="${base}sections/`
        );
        fixedHtml = fixedHtml.replace(
          /(href="\.\/components\/)/g,
          `href="${base}components/`
        );
        fixedHtml = fixedHtml.replace(
          /(href="\.\/index\.css")/g,
          `href="${base}index.css"`
        );

        // Добавляем правильный путь к main.js
        if (!fixedHtml.includes('assets/js/main.js')) {
          fixedHtml = fixedHtml.replace(
            /<\/body>/,
            `<script type="module" src="${base}assets/js/main.js"></script>\n</body>`
          );
        }
      }

      return fixedHtml;
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
          // Указываем правильные имена файлов
          entryFileNames: 'assets/js/[name].js', // Без хеша для упрощения ссылок
          chunkFileNames: 'assets/js/[name].[hash].js',
          assetFileNames: assetInfo => {
            // Важно: не добавляем хеш к HTML файлам
            if (assetInfo.name && assetInfo.name.endsWith('.html')) {
              return '[name][extname]';
            }
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              return 'assets/css/[name].[hash][extname]';
            }
            return 'assets/[name].[hash][extname]';
          },
          // Предотвратить манглинг имен модулей
          manualChunks: undefined,
        },
      },

      target: 'es2015',
    },

    // Добавляем пользовательские плагины
    plugins: [
      fixExportDefaultAndPathsPlugin,
      copyHtmlAndCssPlugin,
      ensureFilesAndFixPathsPlugin,
    ],
  };
});
