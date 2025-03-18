import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Получаем текущую директорию в ES модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Путь к директориям
const distDir = path.resolve(__dirname, 'dist');
const assetsDir = path.resolve(__dirname, 'dist/assets');

try {
  // Найти HTML файл в assets
  const files = fs.readdirSync(assetsDir);
  const htmlFile = files.find(file => file.endsWith('.html'));

  if (htmlFile) {
    console.log(`Найден HTML файл: ${htmlFile}`);

    // Прочитать содержимое правильного HTML
    const htmlPath = path.join(assetsDir, htmlFile);
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

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
