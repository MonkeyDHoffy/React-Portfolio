import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Set the development server port
  },
  build: {
    outDir: 'dist', // Output directory for the build
  },
  css: {
    postcss: './postcss.config.js', // Use the PostCSS configuration
  },
});