// fix-html.js
// Скрипт для исправления путей в HTML после сборки

import fs from 'fs';
import path from 'path';

const distDir = './dist';
const basePath = '/R36S_STORE_JS/';

// Функция для фиксации относительных путей в HTML-файлах
function fixHtmlPaths(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Исправляем пути к CSS и JS
    content = content.replace(/href="\//g, `href="${basePath}`);
    content = content.replace(/src="\//g, `src="${basePath}`);

    // Исправляем пути к изображениям и другим статическим файлам
    content = content.replace(/url\(\//g, `url(${basePath}`);

    // Записываем обратно
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed paths in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error);
  }
}

// Обработка всех HTML-файлов в директории сборки
function processDirectory(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);

    if (file.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.name.endsWith('.html')) {
      fixHtmlPaths(fullPath);
    }
  }
}

// Запускаем обработку
processDirectory(distDir);
console.log('HTML path fixing completed!');
