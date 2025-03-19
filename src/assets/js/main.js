// Простая версия main.js
console.log('R36S Store website initialized');

// Базовая инициализация
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded and ready');

  // Получаем root элемент
  const root = document.getElementById('root');

  if (!root) {
    console.error('Root element not found');
    return;
  }

  // Простое содержимое для проверки работоспособности
  root.innerHTML = `
    <header style="background: #333; color: white; padding: 20px; text-align: center;">
      <h1>R36S Store</h1>
    </header>
    <main style="padding: 20px; text-align: center;">
      <h2>Welcome to R36S Store</h2>
      <p>Your website is working correctly!</p>
      <p>This is a basic version to ensure GitHub Pages compatibility.</p>
    </main>
    <footer style="background: #333; color: white; padding: 10px; text-align: center;">
      &copy; 2025 R36S Store
    </footer>
  `;
});
