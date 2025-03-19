// Simplified App.js
console.log('Simplified App.js loaded');

// Безопасная инициализация приложения
export default function initApp() {
  const root = document.getElementById('root');
  if (!root) {
    console.error('Root element not found');
    return;
  }

  // Базовый контент для проверки работоспособности
  root.innerHTML = `
    <header style="background: #333; color: white; padding: 20px; text-align: center;">
      <h1>R36S Store</h1>
    </header>
    <main style="padding: 20px; text-align: center;">
      <h2>Welcome to R36S Store</h2>
      <p>This is a simplified version to test GitHub Pages deployment.</p>
      <p>Your site is working correctly!</p>
    </main>
    <footer style="background: #333; color: white; padding: 10px; text-align: center;">
      &copy; 2025 R36S Store
    </footer>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  try {
    initApp();
  } catch (error) {
    console.error('Error initializing app:', error);

    // Показать ошибку на странице
    const root = document.getElementById('root');
    if (root) {
      root.innerHTML = `
        <div style="padding: 20px; color: red; text-align: center;">
          <h1>Error</h1>
          <p>${error.message}</p>
        </div>
      `;
    }
  }
});
