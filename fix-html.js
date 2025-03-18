import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Путь к директориям
const distDir = path.resolve(__dirname, 'dist');
const assetsDir = path.resolve(__dirname, 'dist/assets');
const jsDir = path.resolve(assetsDir, 'js');

try {
  // Найти HTML файл в assets
  const assetFiles = fs.readdirSync(assetsDir);
  const htmlFile = assetFiles.find(file => file.endsWith('.html'));

  if (htmlFile) {
    console.log(`Найден HTML файл: ${htmlFile}`);

    // Прочитать содержимое правильного HTML
    const htmlPath = path.join(assetsDir, htmlFile);
    let htmlContent = fs.readFileSync(htmlPath, 'utf-8');

    // Найти JS файл main в директории assets/js
    let mainJsPath = '';
    if (fs.existsSync(jsDir)) {
      const jsFiles = fs.readdirSync(jsDir);
      const mainJsFile = jsFiles.find(
        file => file.startsWith('main.') && file.endsWith('.js')
      );

      if (mainJsFile) {
        console.log(`Найден Main JS файл: ${mainJsFile}`);
        mainJsPath = `./assets/js/${mainJsFile}`;
      }
    }

    // Исправить путь к main.js если найден
    if (mainJsPath) {
      htmlContent = htmlContent.replace(
        /<script type="module" src="\.\/main\.js"><\/script>/,
        `<script type="module">
    // Базовая инициализация приложения
    document.addEventListener('DOMContentLoaded', () => {
      console.log('Приложение R36S инициализировано');
      
      // Проверка, доступен ли App.js
      import('./assets/js/App.js')
        .then(module => {
          const initApp = module.default || module.initApp;
          if (typeof initApp === 'function') {
            initApp();
          }
        })
        .catch(error => {
          console.error('Ошибка загрузки App.js:', error);
        });
    });
  </script>`
      );
    }

    // Записать в основной index.html
    fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent);
    console.log('✓ Исправлен index.html');

    // Опционально: создать 404.html для SPA на GitHub Pages
    fs.writeFileSync(path.join(distDir, '404.html'), htmlContent);
    console.log('✓ Создан 404.html для GitHub Pages');
  } else {
    console.error('HTML файл не найден в директории assets!');
  }
} catch (error) {
  console.error('Ошибка при исправлении HTML:', error);
}
