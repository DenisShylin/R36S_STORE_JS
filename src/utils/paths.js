// src/utils/paths.js
// Утилитарные функции для работы с путями

// Получение правильного базового пути для GitHub Pages
export function getBasePath() {
  const isDevelopment = import.meta.env.DEV;
  return isDevelopment ? '/' : '/R36S_STORE_JS/';
}

// Функция для создания полного пути к ресурсу
export function resolvePath(relativePath) {
  return `${getBasePath()}${relativePath}`;
}

// Функция для создания пути к секции
export function getSectionPath(sectionName) {
  return `${getBasePath()}sections/${sectionName}/${sectionName}.html`;
}

// Функция для создания пути к компоненту
export function getComponentPath(componentName) {
  return `${getBasePath()}components/${componentName}/${componentName}.html`;
}
