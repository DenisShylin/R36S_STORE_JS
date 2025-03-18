import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Helper function to copy directories recursively during build
function copyDirectory(source, destination) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  // Read source directory
  const files = fs.readdirSync(source);

  // Copy each file/directory
  for (const file of files) {
    const sourcePath = path.join(source, file);
    const destPath = path.join(destination, file);

    // Get file stats
    const stats = fs.statSync(sourcePath);

    if (stats.isDirectory()) {
      // Recursively copy subdirectories
      copyDirectory(sourcePath, destPath);
    } else {
      // Copy file
      fs.copyFileSync(sourcePath, destPath);
    }
  }
}

export default defineConfig(({ mode }) => {
  // Define production base path for GitHub Pages
  const isProd = mode === 'production';
  const base = isProd ? '/R36S_STORE_JS/' : '/';

  // Custom build plugin to copy HTML fragments to dist
  const copyHtmlFragmentsPlugin = {
    name: 'copy-html-fragments',
    closeBundle: () => {
      if (isProd) {
        // Copy section HTML files to dist
        const sectionsDir = resolve(__dirname, './src/sections');
        const destSectionsDir = resolve(__dirname, './dist/sections');

        if (fs.existsSync(sectionsDir)) {
          copyDirectory(sectionsDir, destSectionsDir);
          console.log('✓ Copied section HTML fragments to dist/sections');
        }

        // Copy component HTML files to dist
        const componentsDir = resolve(__dirname, './src/components');
        const destComponentsDir = resolve(__dirname, './dist/components');

        if (fs.existsSync(componentsDir)) {
          copyDirectory(componentsDir, destComponentsDir);
          console.log('✓ Copied component HTML fragments to dist/components');
        }
      }
    },
  };

  return {
    // Base path for GitHub Pages
    base,

    // Set project root to src directory
    root: 'src',

    // Configure path resolution
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '~@': resolve(__dirname, './src'),
        // Configure aliases for absolute imports
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

    // Public directory relative to project root, not src root
    publicDir: resolve(__dirname, './public'),

    // Include various asset types
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
      '**/*.html', // Include HTML fragments
    ],

    // Development server config
    server: {
      port: 5173,
      open: true,
      host: true,
      // Allow access to files outside src root directory
      fs: {
        allow: ['.', '..'],
      },
    },

    // Build configuration
    build: {
      // Path relative to src root
      outDir: '../dist',
      assetsDir: 'assets',
      minify: 'esbuild',
      sourcemap: mode === 'development',
      emptyOutDir: true,
      cssCodeSplit: true,

      // Configure Rollup options
      rollupOptions: {
        input: {
          main: resolve(__dirname, './src/index.html'),
        },
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'assets/js/[name].[hash].js',
          entryFileNames: 'assets/js/[name].[hash].js',
        },
      },

      target: 'es2015',
    },

    // Add custom plugins
    plugins: [copyHtmlFragmentsPlugin],
  };
});
