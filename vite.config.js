import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/gopack/', // Set the base path for the project
  plugins: [react()], // Add React plugin
});
